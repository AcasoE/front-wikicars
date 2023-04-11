import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCarRoutingModule } from './edit-car-routing.module';
import { EditCarComponent } from './edit-car.component';


@NgModule({
  declarations: [
    EditCarComponent,
  ],
  imports: [
    CommonModule,
    EditCarRoutingModule, SharedModule
  ]
})
export class EditCarModule { }