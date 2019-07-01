import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { print } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit{
  public user: any = {};
  public post: any = '';
  public posts: any = [];
  public arr:  any = [1,2,3,4,5,6,7,8,9];

  constructor(public fs: AngularFirestore, public authService: AuthService, public http: HttpClient, public router: Router) { }

  ngOnInit() 
  { 
    this.getUInfo();

    let db = firebase.firestore();
    let posts = db.collection('posts');
    posts.onSnapshot(postSnap => {
      postSnap.docChanges().forEach(post => {
        switch(post.type)
        {
          case 'added': {
            this.posts.push(post.doc.data());
          }break;
          case 'modified': {

          }break;
          case 'removed': {

          }break;
        };
      });
    });

    console.log(this.posts);
  }

  logout()
  {
    firebase.auth().signOut().then(()=>{
      this.router.navigateByUrl('landing');
    })
  }

  getUInfo()
  {
    /*await new Promise(resolve => {
      this.authService.getUserInfo().subscribe(uInfo => { this.user = uInfo; resolve(); }); 
    });*/

    this.authService.getUserInfo().then(uInfo => {
      this.user = uInfo;
    });

    console.log(this.user);
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

  ngAfterContentInit()
  {

  }

}
