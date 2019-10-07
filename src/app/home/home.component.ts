import { Component, OnInit, AfterViewInit, NgZone}  from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { print } from 'util';
import { DomSanitizer } from '@angular/platform-browser';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public user: any = {};
  public post: any = '';
  public posts: any = [];
  public arr:  any = [1,2,3,4,5,6,7,8,9];
  public Editor = ClassicEditor;
  public dayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  public showEditor: boolean = false;
  public dayNumber = new Date().getDay();
  public date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString();
  public outputHtml: any = "<p>gg</p>";

  public postData: any = {
    editorData: '<h1>Hello, world!</h1>'
  };

  constructor(public fs: AngularFirestore, public sanitizer: DomSanitizer, public authService: AuthService, public zone: NgZone, public http: HttpClient, public router: Router)
  { 
  this.authService.getUserInfo().then(uInfo => {
      this.user = uInfo;

      if(!this.user)
      {
        this.zone.run(() => {
          this.router.navigateByUrl('landing');
        });
      }

      console.log(this.user);
  });
}

  logout()
  {
    firebase.auth().signOut().then(() => {
      this.zone.run(()=>{
        
        this.router.navigateByUrl('landing');
      })
    })
  }

  createPost()
  {
    let db = firebase.firestore();
    let posts = db.collection('posts');

    let newPost = {
      
    };

    posts.add(newPost).then(()=> {

    });
  }

  publishPost()
  {
    this.outputHtml = this.sanitizer.bypassSecurityTrustHtml(this.postData.editorData);
    console.log(this.outputHtml);
  }

  ngOnInit()
  {
    let db = firebase.firestore();
    let posts = db.collection('posts');
  }

  ngAfterViewInit()
  {
    
  }
}
