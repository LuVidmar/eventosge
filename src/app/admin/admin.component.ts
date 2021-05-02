import { Component, OnInit } from '@angular/core';
import { states } from '../data-types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //Variable
  public stateEnum = states;
  selectedComponent: number = states.products;

  constructor() { }

  ngOnInit(): void {
  }

  setState(s: string) {
    switch (s) {
      case 'products':
        this.selectedComponent = states.products;
        break;
      case 'users':
        this.selectedComponent = states.users;
        break;
      default:
        break;
    }
  }

}
