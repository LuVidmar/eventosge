import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  analytics;
  constructor(analytics: AngularFireAnalytics) {
    this.analytics = analytics;
  }

  ngOnInit(): void {
  }

  registerAnalytics(event){
    this.analytics.logEvent(event);
    console.log(event);
  }

}
