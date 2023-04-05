import { Injectable } from '@angular/core';
import { CarI } from '../car/models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
public selectedCar?: CarI 

public  selectCar(car: CarI){
  return  this.selectedCar = car
}

}
