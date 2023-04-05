import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListRoutingModule } from './cars-list-routing.module';
import { CarsListComponent } from './cars-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsListRoutingModule, 
    SharedModule
  ]
})
export class CarsListModule { }
