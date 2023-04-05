import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailRoutingModule } from './car-detail-routing.module';
import { CarDetailComponent } from './car-detail.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    CarDetailRoutingModule,
    CoreModule
  ]
})
export class CarDetailModule{ 

}
