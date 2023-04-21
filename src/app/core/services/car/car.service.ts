import { Observable, filter, forkJoin, map, tap } from 'rxjs';
import { ApiCarService } from './api/api-car.service';
import { Injectable } from '@angular/core';
import { ApiCarI, CarI, CarRequestBody } from './models/car.interface';

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
  public getCarById(id: string): Observable<CarI>{
    return this.apiCarService.getApiCarById(id).pipe(
      map((apiCar: ApiCarI) => this.transformCar(apiCar)))
  }
  public deleteCarByID(id:string): Observable<CarI>{
    return this.apiCarService.deleteApiCArById(id)
  }
  public getCarToReviseById(id: string): Observable<CarI>{
    return this.apiCarService.getApiCarToReviseById(id).pipe(
      map((apiCar: ApiCarI) => this.transformCar(apiCar)))
  }
  public getCarsToRevise(): Observable<CarI[]> {

    return this.apiCarService.getAllCarsTorevise().pipe(
      map((apicars: ApiCarI[])=>
      this.transformCars(apicars)),
      filter((cars:CarI[])=>{
        return cars.length > 0
      })
    )
  }
public createCarToRevise(body: CarRequestBody): Observable<CarI>{
  return this.apiCarService.postApiCarToRevise(body)
}
public deleteCarToRevise(id: string): Observable<CarI>{
  
  return this.apiCarService.deleteApiCarToreviseById(id)
}
public updateCar(body: CarRequestBody, id: string): Observable<CarI>{
return this.apiCarService.updateApiCar(body, id)
}
public acceptCarToRevise(car: CarI): Observable<CarI>{
  const acceptCarObservable = forkJoin([
    this.apiCarService.postApiCar(car),
    this.apiCarService.deleteApiCarToreviseById(car._id)
  ]);

  return acceptCarObservable.pipe(
    map(() => car)
  );
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
