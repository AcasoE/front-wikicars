import { Injectable, OnInit } from '@angular/core';
import { CarI } from '../car/models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService implements OnInit{
public selectedCar?: CarI 

public ngOnInit(): void {
  console.log(this.selectedCar);
  
}
public  selectCar(car: CarI){
console.log(car);

  return  this.selectedCar = car
}



}
