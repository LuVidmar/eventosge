import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule,
  ],
  exports: [
    MDBBootstrapModule,
  ]
})
export class MaterialModule { }
