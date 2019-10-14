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

export class UserComponent implements OnInit {

  user: any = {};
  userLoaded: boolean = false;

  constructor(public authService: AuthService, public router: Router, public route: ActivatedRoute, public zone: NgZone) {  }

  ngOnInit() {
    this.route.params.subscribe(_p => {
      let id = _p['id'];
      
      let db = firebase.default.firestore();
      let users = db.collection('users');

      users.doc(id).get().then(u => {
        let uid = u.id;
        this.user = u.data();
        
        let jobs = db.collection('jobs').where('uid', '==', uid).get().then(jobs => {
          this.user.jobs = jobs.docs;

          let events = db.collection('jobs').where('uid', '==', uid).get().then(events => {
            this.user.events = events.docs;
            console.log('done');
            
            this.userLoaded = true;
            console.log(this.user);
          });
        })

      });
      
    })
  }

}
