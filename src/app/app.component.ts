import { Component, ViewChild, ElementRef, OnInit, AfterContentInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('bgVid', {static: true}) vid: ElementRef;

  title = 'WWCommunity';
  
  ngOnInit()
  {
  }
}
