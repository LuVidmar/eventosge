import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin.component';

//Material
import { MaterialModule } from '../material/material.module';
import { DatabaseService } from '../database.service';

@NgModule({
  declarations: [
    ProductListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [DatabaseService],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
