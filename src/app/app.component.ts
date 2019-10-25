import { Component, ViewChild, ElementRef, OnInit, AfterContentInit, NgZone, AfterViewInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from './fb';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public user: any = {};
  constructor(public router: Router, public route: ActivatedRoute, public zone: NgZone, public authService: AuthService)
  {

  }

  ngAfterViewInit()
  {
    this.authService.getUserInfo().then(uInfo => {
      this.zone.run(() => {
        this.user = uInfo;
      
        if(!this.user)
        {
            this.router.navigateByUrl('landing');
        }
      });
    });
    //routerSub.unsubscribe();
  }

  ngOnInit()
  {

  }

  logout()
  {
    firebase.default.auth().signOut().then(()=>{
      this.zone.run(()=>{
        this.router.navigateByUrl('/landing')
      })
    });
  }
}
