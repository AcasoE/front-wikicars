import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: CreateCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedCarRoutingModule { }
