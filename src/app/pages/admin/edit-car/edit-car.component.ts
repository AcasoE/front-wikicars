import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarI } from 'src/app/core/services/car/models/car.interface';
import { CarService } from 'src/app/core/services/car/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent{
public car?: CarI 

constructor(
  private router: Router,
  private carService: CarService,
  private activatedRoute: ActivatedRoute
){
  this.activatedRoute.params.subscribe((params)=>{
    const carId = params['id']
    this.carService.getCarById(carId).subscribe((car)=>{
      this.car = car
    })

  })
}

}
