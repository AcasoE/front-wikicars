import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
 public car?: CarI


 constructor(
  private router: Router,
  private carService: CarService,
  private activatedRoute: ActivatedRoute
 ){
  this.activatedRoute.params.subscribe((params)=>{
    const carId = params['id'];
    this.carService.getCarToReviseById(carId).subscribe((car)=>{
      this.car = car
      console.log(car);
      
    })
  })
 }
}
