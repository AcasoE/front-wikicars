import { Injectable } from '@angular/core';
import { CarI } from '../car/models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
private carShared?: CarI

public setCarShared(car: CarI){
  this.carShared = car
}
public getCarshared(){
  return this.carShared
}
}
