import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() scrollEv = new EventEmitter<string>();

  scroll(name: string): void {
    this.scrollEv.next(name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
