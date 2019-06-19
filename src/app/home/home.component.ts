import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  public user: object = {};
  public post: any = '';


  constructor(public fs: AngularFirestore, public authService: AuthService, public http: HttpClient, public router: Router) { }

  ngOnInit() 
  {
    this.authService.getUserInfo().subscribe(u => {
      this.user = u;
      console.log(u);
    });
  }

  ngAfterContentInit()
  {
    this.authService.getUserInfo().subscribe(u => {
      this.user = u;
      console.log(u);
    });
  }


}
