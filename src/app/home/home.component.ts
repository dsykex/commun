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
import {AngularEditorConfig} from '@kolkov/angular-editor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public user: any = {};
  public newpost: any = {};
  public posts: Array<{}> = [];
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
  public outputHtml: any = "";
  public pageLoaded: boolean = false;
  public postCaption: string;

  constructor(public fs: AngularFirestore, public ac: AppComponent, public sanitizer: DomSanitizer, public authService: AuthService, public zone: NgZone, public http: HttpClient, public router: Router)
  { 

  }

  createPost()
  {
    this.authService.getUserInfo().then(uInfo => {
      let me = uInfo;
      let db = firebase.firestore();
      let posts = db.collection('posts');
      
  
      let newPost = {
        createdAt: Date.now(),
        caption: this.postCaption,
        uid: me.id
      };
  
      posts.add(newPost).then(()=> {
        console.log('done')
      });
    })
  }

  ngOnInit()
  {
    this.authService.getUserInfo().then(uInfo => {
      this.zone.run(() => {
        this.user = uInfo;
      
        if(!this.user)
        {
            this.router.navigateByUrl('landing');
        }
        this.pageLoaded=true;
      })
    });
  }

  ngAfterViewInit()
  {
    
    let db = firebase.firestore();
    let postCollection = db.collection('posts').orderBy('createdAt').onSnapshot(_postsSnap => {
     _postsSnap.docChanges().forEach(change => {
       if(change.type==="added")
       {
        let newDoc = change.doc.data(); newDoc.id = change.doc.id;
       
        this.posts.unshift(newDoc);
       }
     })
      console.log(this.posts);
    }, err => { });
  }
}
