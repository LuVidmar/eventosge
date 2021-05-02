import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-photo-visualizer',
  templateUrl: './photo-visualizer.component.html',
  styleUrls: ['./photo-visualizer.component.scss']
})
export class PhotoVisualizerComponent implements OnInit {

  imglink: string;

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  }

}
