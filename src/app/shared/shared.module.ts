import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilerNamePipe } from './pipes/filter-name/filer-name.pipe';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';

@NgModule({
  declarations: [
    CarComponent,
    FormComponent,
    FilerNamePipe,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], exports: [
    CarComponent,
    FormComponent,
    FilerNamePipe,
    PaginatePipe
  ]
})
export class SharedModule { }
