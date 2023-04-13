import { CarService } from 'src/app/core/services/car/car.service';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CarDetailService } from 'src/app/core/services/car-detail/car-detail.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public car?: CarI
  public isAdmin: boolean = false
  constructor(
    private carDetailService: CarDetailService,
    private authService: AuthService,
    private carService: CarService,
    private router: Router
  ) {
    this.car = this.carDetailService.selectedCar
    this.authService.isAdmin$.subscribe((isAdmin)=>{
      this.isAdmin = isAdmin
    })
   }
  public ngOnInit(): void {
    
  }
  
public deleteCar(){
  
  if(this.car){
    this.carService.deleteCarByID(this.car?._id).subscribe((car)=>{
      if (car) {
        this.router.navigate(['cars-list'])
      }
    })
   
  }
}

}
