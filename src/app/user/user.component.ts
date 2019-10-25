import { Component, OnInit, AfterViewInit, NgZone}  from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { print } from 'util';
import { DomSanitizer } from '@angular/platform-browser';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as firebase from '../fb';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements AfterViewInit {

  user: any = {};
  userLoaded: boolean = false;
  posts: Array<{}> = [];

  constructor(public authService: AuthService, public router: Router, public route: ActivatedRoute, public zone: NgZone) {  }

  ngAfterViewInit() {
    this.route.params.subscribe(_p => {
      let id = _p['id'];
      
      let db = firebase.default.firestore();
      let users = db.collection('users');

      users.doc(id).get().then(u => {
        let uid = u.id;
        this.user = u.data();
        this.userLoaded=true;

        let postCollection = db.collection('posts').where('uid', '==', uid).orderBy('createdAt').onSnapshot(_postsSnap => {
          if(_postsSnap.docChanges().length > 0) {
            _postsSnap.docChanges().forEach(change => {
              if(change.type==="added")
              {
                let newDoc = change.doc.data(); newDoc.id = change.doc.id;
              
                this.posts.unshift(newDoc);
              }
            })
          }
        }, err => { });
      });
    })
  }
}
