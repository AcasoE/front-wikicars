import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBrandI, BrandRequestBodyI } from '../models/brands.interface';
const URL_BRANDS = 'https://back-wikicars.vercel.app'

@Injectable({
  providedIn: 'root'
})
export class ApiBrandService {


  constructor(
    private http: HttpClient
  ) { }



  public getApiBrands(): Observable<ApiBrandI[]>{
    return this.http.get<ApiBrandI[]>(`${URL_BRANDS}/brands`)

  }
  public newBrand(body: BrandRequestBodyI): Observable<ApiBrandI>{
    return this.http.post<ApiBrandI>(`${URL_BRANDS}/brands/create`, body)
  }
}
