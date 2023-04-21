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

  public cars: CarI[] =[]
  public inputValue: string= ""
  public currentPage: number = 1
  public pageSize: number = 6

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

public goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

public goToNextPage() {
  if (this.currentPage < this.cars.length / this.pageSize) {
    this.currentPage++;
  }
}

public totalPages(cars:CarI[], pageSize: number){
  return Math.ceil(cars.length / pageSize)
}
}
