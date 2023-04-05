import { Observable, filter, map } from 'rxjs';
import { ApiCarService } from './api/api-car.service';
import { Injectable } from '@angular/core';
import { ApiCarI, CarI } from './models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private apiCarService: ApiCarService,
  ) { }


  public getCars(): Observable<CarI[]> {

    return this.apiCarService.getApiCars().pipe(
      map((apicars: ApiCarI[])=>this.transformCars(apicars)),
      filter((cars:CarI[])=>{
        return cars.length > 0
      })
    )
  }
  private transformCars(ApiCars: ApiCarI[]): CarI[] {
    const carsTransformed = ApiCars.map((car) => this.transformCar(car));
    return carsTransformed
  }



  private transformCar(apiCar: ApiCarI): CarI{
    delete apiCar.__v
    delete apiCar.createdAt
    delete apiCar.updatedAt
    return apiCar
  }
}
