import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CarI } from '../services/car/models/car.interface';
import { CarService } from '../services/car/car.service';

@Injectable({
  providedIn: 'root'
})
export class CarsDataResolver implements Resolve<CarI[]> {

  constructor(
    private carsService: CarService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarI[]> {
    return this.carsService.getCars();
  }
}