import { Component, ViewChild, ElementRef, OnInit, AfterContentInit, NgZone, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from './fb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user: any = {};
  constructor(public router: Router, public route: ActivatedRoute, public zone: NgZone)
  {
  }

  ngOnInit()
  {

    //routerSub.unsubscribe();
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
