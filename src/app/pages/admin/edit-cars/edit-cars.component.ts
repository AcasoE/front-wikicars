import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.scss']
})
export class EditCarsComponent {
public id: string = ""
public car?: CarI
  constructor(
    private router: Router,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
   ){
    this.activatedRoute.params.subscribe((params)=>{
      
      const carId = params['id'];
      this.id = carId
      this.carService.getCarById(carId).subscribe((car)=>{
        this.car = car
        
      })
    })
   }
}
