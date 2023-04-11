import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationCarsRoutingModule } from './validation-cars-routing.module';
import { ValidationCarsComponent } from './validation-cars.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ValidationCarsComponent
  ],
  imports: [
    CommonModule,
    ValidationCarsRoutingModule,
    SharedModule
  ]
})
export class ValidationCarsModule { }
