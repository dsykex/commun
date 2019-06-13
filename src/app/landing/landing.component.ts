import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public fs: AngularFirestore, public http: HttpClient, public router: Router) { }

  public user: any = {};
  public hasUser: boolean;
  public errorMsg: string;

  public formdata: any;
  public emailid: any;

  public signUpActive: boolean;
  public loginActive: boolean;

  ngOnInit() 
  {

    firebase.auth().onAuthStateChanged(authData => {
      console.log(authData);
      if(authData)
      {
        this.hasUser = true;
      }
      else
      {
        this.hasUser=false;

        this.formdata = new FormGroup({
          email: new FormControl("", Validators.compose([ Validators.required, Validators.pattern("[^ @]*@[^ @]*") ])),
          password: new FormControl("", Validators.compose([ Validators.required ])),
          name: new FormControl("", Validators.compose([ Validators.required ])),
          conf_password: new FormControl("", Validators.compose([ Validators.required ])),
        });
      }
    });
  }

  onClickSubmit(data) {
    console.log(data);
  }

  showSignup()
  {
    this.signUpActive=true;
    this.loginActive=false;
  }

  showLogin()
  {
    this.loginActive=true;
    this.signUpActive=false;
  }

  login()
  {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(()=>{
      this.router.navigateByUrl('');
    })
  }

  join()
  {
    if(this.user.email && this.user.first_name && this.user.last_name && this.user.password && this.user.conf_password)
    {
      if(this.user.password == this.user.conf_password)
      {
        let db = firebase.firestore();
        let users = db.collection('users');
        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(()=>{
          let newUser = {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            password: this.user.password,
            createdAt: Date.now(),
            rank: 'm'
          };

          users.doc(this.user.email).set(newUser).then(()=> {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(()=>{
              this.router.navigateByUrl('');
            });
          }).catch(() => { });
        }).catch(()=>{
          this.errorMsg = 'An error occured processing your request. Either an an account exists under that email or a network issue occured. Please try again.';
        setTimeout(() => {
          this.errorMsg = '';
        },3000);
        })
      }
      else
      {
        this.errorMsg = 'Passwords must match.';
        setTimeout(() => {
          this.errorMsg = '';
        },3000);
      }
    }
    else
    {
      this.errorMsg = 'All fields are required.';
      setTimeout(() => {
        this.errorMsg = '';
      },3000);
    }
  }
}
