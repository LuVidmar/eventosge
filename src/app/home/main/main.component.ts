import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  Txtel;
  imgel;

  ngOnInit(): void {
    this.Txtel = document.getElementById('mainTxt');
    this.imgel = document.getElementById('mainImg');
  }

  showText(){
    this.Txtel.style.animation = 'rightTrans 500ms forwards ease-in-out';
    this.imgel.style.animation = 'leftTrans 500ms forwards ease-in-out';
  }

  hideText(){
    this.Txtel.style.animation = 'rightTransR 500ms forwards ease-in-out';
    this.imgel.style.animation = 'leftTransR 500ms forwards ease-in-out';
  }

}
