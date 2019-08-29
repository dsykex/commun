import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  public user: any = {};
  constructor(public router: Router, public zone: NgZone, public authService: AuthService) { 
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

  ngOnInit()
  {
    
  }

}
