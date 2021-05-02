import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventosge';

  constructor(analytics: AngularFireAnalytics) {
    
  }

  onActivate(event) {
    window.scroll(0,0);
  }
  
}
