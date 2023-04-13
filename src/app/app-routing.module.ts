import { EditModule } from './pages/admin/edit/edit.module';
import { CarDetailModule } from './pages/car-detail/car-detail.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { CarsDataResolver } from './core/resolvers/cars-data.resolver';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

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
    loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: "cars-list",
    loadChildren: () => import ('./pages/cars-list/cars-list.module').then(m=>m.CarsListModule),
    resolve:{
      carsData: CarsDataResolver
    },
    canActivate:[AuthGuard]
  },
  {
    path: "car-detail",
    loadChildren: () => import('./pages/car-detail/car-detail.module').then(m=>m.CarDetailModule),
    canActivate:[AuthGuard]
  },
  {
    path: "create",
    loadChildren: () => import ('./pages/create-car/create-car.module').then(m=>m.CreatedCarModule),
    canActivate:[AuthGuard]
  },
  {
    path: "validation-list",
    loadChildren: () => import ('./pages/admin/validation-cars/validation-cars.module').then(m=>m.ValidationCarsModule),
    canActivate:[AuthGuard, AdminGuard]
  },
  {
    path: "edit/:id",
    loadChildren: () => import ('./pages/admin/edit/edit.module').then(m=>m.EditModule),
    canActivate:[AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
