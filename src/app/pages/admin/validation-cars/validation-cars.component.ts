import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-validation-cars',
  templateUrl: './validation-cars.component.html',
  styleUrls: ['./validation-cars.component.scss']
})
export class ValidationCarsComponent implements OnInit {
  public cars?: CarI[]
  public remove: boolean = false
  public accept: boolean = false
  constructor (
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){ 
    
  }
  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data)=>{
      if(data['carsData']) {
        this.cars = data['carsData']
      } else{
        this.getCarsToRevise()
      }
    })
}
  private async getCarsToRevise(){
    this.carService.getCarsToRevise().subscribe((cars: CarI[])=>{
      this.cars = cars
    
    })
  }
  public  deleteCarToRevise(id: string){
     this.carService.deleteCarToRevise(id).subscribe(()=> 
     this.cars = this.cars?.filter(car => car._id !== id)
     )
    this.remove = true
   setTimeout(()=>{
    this.remove = false
   },2000)
   
   console.log(this.cars);
  }
  public acceptCar(car: CarI){
    this.carService.acceptCarToRevise(car).subscribe(()=> 
    this.cars = this.cars?.filter(car2 => car._id !== car2._id)
    )
    this.accept = true
    setTimeout(()=>{
     this.accept = false
    },2000)
  }
  public editCar(id: string){
    this.router.navigate(['edit-car', id])
  }
}

