import { Component, OnInit } from '@angular/core';
import { CarDetailService } from 'src/app/core/services/car-detail/car-detail.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public car?: CarI
  constructor(
    private carDetailService: CarDetailService
  ) {
   }
  public ngOnInit(): void {
    this.car = this.carDetailService.selectedCar
  }

  
}
