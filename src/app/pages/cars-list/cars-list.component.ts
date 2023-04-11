import { CarService } from './../../core/services/car/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { CarDetailService } from 'src/app/core/services/car-detail/car-detail.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  public cars?: CarI[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carDetailService: CarDetailService,
    private router: Router
  ){}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data)=>{
      if(data['carsData']) {
        this.cars = data['carsData']
      } else{
        this.getCars()
      }
    })
}
public  getCar(car: CarI){
  this.carDetailService.selectCar(car)
  this.router.navigate(['/car-detail'])
}

private getCars(){
  this.carService.getCars().subscribe((cars: CarI[])=>{
    this.cars = cars
  })
}




}
