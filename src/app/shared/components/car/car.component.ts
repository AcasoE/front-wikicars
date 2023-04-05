import { CarDetailService } from './../../../core/services/car-detail/car-detail.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  @Input() public carToShow?: CarI;
  @Output() public onSendCar = new EventEmitter<CarI>() 
constructor(
  private router: Router
){}
public sendCar(car: CarI){
  this.onSendCar.emit(car)
}
}
