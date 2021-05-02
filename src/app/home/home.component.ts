import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutHoverOn(){
    document.getElementById('skewed').style.animation = 'unskew 500ms forwards ease-in-out';
  }

  aboutHoverOff(){
    document.getElementById('skewed').style.animation = 'skew 500ms forwards ease-in-out';
  }

  scrollto(name: string) { 
    var elementPosition = document.getElementById(name).getBoundingClientRect().top;
    var offsetPosition = elementPosition - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

}
