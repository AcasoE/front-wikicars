import { CarDetailModule } from './pages/car-detail/car-detail.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { CarsDataResolver } from './core/resolvers/cars-data.resolver';

const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('./pages/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: "cars-list",
    loadChildren: () => import ('./pages/cars-list/cars-list.module').then(m=>m.CarsListModule),
    resolve:{
      carsData: CarsDataResolver
    }
  },
  {
    path: "car-detail",
    loadChildren: () => import('./pages/car-detail/car-detail.module').then(m=>m.CarDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
