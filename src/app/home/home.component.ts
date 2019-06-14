import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {

  constructor(public fs: AngularFirestore, public authService: AuthService, public http: HttpClient, public router: Router) { }

  public user: any = {};
  public post: any = '';

  ngOnInit() 
  {
    this.authService.getUserInfo().subscribe(u => {
      this.user = u;
      console.log(u);
    });
  }


}
