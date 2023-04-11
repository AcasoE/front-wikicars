import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationCarsComponent } from './validation-cars.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ValidationCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationCarsRoutingModule { }
