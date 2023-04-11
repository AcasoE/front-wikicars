import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule, ReactiveFormsModule
  ], exports: [
    CarComponent,
    FormComponent
  ]
})
export class SharedModule { }
