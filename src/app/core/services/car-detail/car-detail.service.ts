import { Injectable, OnInit } from '@angular/core';
import { CarI } from '../car/models/car.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
public selectedCar?: CarI 
constructor(
  public router: Router
){this.noCar()}


public noCar(){
  if(!this.selectedCar){
    this.router.navigate(['/cars-list'])
  }
}


public  selectCar(car: CarI){
console.log(car);

  return  this.selectedCar = car
}



}
