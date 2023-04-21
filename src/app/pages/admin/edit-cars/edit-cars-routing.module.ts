import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarsComponent } from './edit-cars.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: EditCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCarsRoutingModule { }
