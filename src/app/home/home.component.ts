import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public fs: AngularFirestore) { }
  public user: any = {};
  public hasUser: boolean;
  ngOnInit() {
    firebase.auth().onAuthStateChanged(authData => {
      console.log(authData);
      if(authData)
      {
        this.hasUser = true;
      }
      else
      {
        this.hasUser=false;
      }
    })
  }

}
