import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCarI, CarRequestBody } from '../models/car.interface';

const API_URL = 'https://back-wikicars.vercel.app'


@Injectable({
  providedIn: 'root'
})
export class ApiCarService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiCars(): Observable<ApiCarI[]> {
    return this.http.get<ApiCarI[]>(`${API_URL}/cars`)
  }
  public getApiCarById(id: string): Observable<ApiCarI>{
    return this.http.get<ApiCarI>(`${API_URL}/cars/${id}`)
  }
  public postApiCar(body: CarRequestBody): Observable<ApiCarI>{
    return this.http.post<ApiCarI>(`${API_URL}/cars/create`, body)
  }
  public updateApiCar(body: CarRequestBody, id: string): Observable<ApiCarI>{
    return this.http.put<ApiCarI>(`${API_URL}/cars/update/${id}`, body)
  }
  public deleteApiCAr(id: string): Observable<ApiCarI>{
    return this.http.delete<ApiCarI>(`${API_URL}/cars/delete/${id}`)
  }
  public postApiCarToRevise(body: CarRequestBody): Observable<ApiCarI>{
    return this.http.post<ApiCarI>(`${API_URL}/carstorevise/create`, body)
  }
  public deleteApiCarToreviseById(id: string): Observable<ApiCarI>{
    return this.http.delete<ApiCarI>(`${API_URL}/carstorevise/remove/${id}`)
  }
  public getCarToReviseById(id: string): Observable<ApiCarI>{
    return this.http.get<ApiCarI>(`${API_URL}/carstorevise/${id}`)
  }
  public getAllCarsTorevise(): Observable<ApiCarI[]>{
    return this.http.get<ApiCarI[]>(`${API_URL}/carstorevise`)
  }
}
