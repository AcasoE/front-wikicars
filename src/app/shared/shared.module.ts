import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ], exports: [
    CarComponent
  ]
})
export class SharedModule { }
