import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCarI, CarRequestBody } from '../models/car.interface';

const API_URL = 'http://localhost:8000'


@Injectable({
  providedIn: 'root'
})
export class ApiCarService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiCars(): Observable<ApiCarI[]> {
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<ApiCarI[]>(`${API_URL}/cars`, {headers})
  }
  public getApiCarById(id: string): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.get<ApiCarI>(`${API_URL}/cars/${id}`, {headers})
  }
  public postApiCar(body: CarRequestBody): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.post<ApiCarI>(`${API_URL}/cars/create`, body, {headers})
  }
  public updateApiCar(body: CarRequestBody, id: string): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.put<ApiCarI>(`${API_URL}/cars/update/${id}`, body, {headers})
  }
  public deleteApiCArById(id: string): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.delete<ApiCarI>(`${API_URL}/cars/delete/${id}`, {headers})
  }
  public postApiCarToRevise(body: CarRequestBody): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.post<ApiCarI>(`${API_URL}/carstorevise/create`, body, {headers})
  }
  public deleteApiCarToreviseById(id: string): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.delete<ApiCarI>(`${API_URL}/carstorevise/remove/${id}`, {headers})
  }
  public getApiCarToReviseById(id: string): Observable<ApiCarI>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.get<ApiCarI>(`${API_URL}/carstorevise/${id}`, {headers})
  }
  public getAllCarsTorevise(): Observable<ApiCarI[]>{
    const token = localStorage.getItem('jwt-auth-token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<ApiCarI[]>(`${API_URL}/carstorevise`, {headers})
  }
}
