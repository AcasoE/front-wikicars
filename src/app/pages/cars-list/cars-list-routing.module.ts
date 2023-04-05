import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsListRoutingModule { }
