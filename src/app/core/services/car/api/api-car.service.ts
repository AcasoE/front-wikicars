import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCarI } from '../models/car.interface';

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
}
