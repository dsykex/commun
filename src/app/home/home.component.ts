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
  
  public postData: any = {
    editorData: ''
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '350',
    minHeight: '350',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Share your work.',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',

    sanitize: true,
    toolbarPosition: 'top',
  };

  constructor(public fs: AngularFirestore, public sanitizer: DomSanitizer, public authService: AuthService, public zone: NgZone, public http: HttpClient, public router: Router)
  { 

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

  ngOnInit()
  {
    this.authService.getUserInfo().then(uInfo => {
      this.user = uInfo;
      
      if(!this.user)
      {
        this.zone.run(() => {
          this.router.navigateByUrl('landing');
        });
      }
      this.pageLoaded=true;

      let db = firebase.firestore();
      let postCollection = db.collection('posts').onSnapshot(_postsSnap => {
       _postsSnap.forEach(doc => {
         let newDoc = doc.data(); newDoc.id = doc.id;
         this.posts.push(newDoc);
       })
        console.log(this.posts);
      }, err => { });
      
    });
  }

  ngAfterViewInit()
  {

  }
}
