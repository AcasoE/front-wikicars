import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: 'full',
    component: CarDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarDetailRoutingModule { }
