import { Observable, filter, map } from 'rxjs';
import { ApiBrandService } from './api/api-brand.service';
import { Injectable } from '@angular/core';
import { ApiBrandI, BrandI } from './models/brands.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
constructor(
  private apiBrandService: ApiBrandService,

){}

public getBrands(): Observable<BrandI[]>{
  return this.apiBrandService.getApiBrands().pipe(
    map((apiBrands: ApiBrandI[])=>this.transformBrands(apiBrands)),
    filter((brands:BrandI[])=>{
      return brands.length > 0
    })
  )
}
public transformBrands(apibrands: ApiBrandI[]): BrandI[]{
  const brandsTransformed = apibrands.map((brand)=>this.transformBrand(brand))
  return brandsTransformed
}
private transformBrand(apiBrand: ApiBrandI): BrandI{
  delete apiBrand.__v
  delete apiBrand.createdAt
  delete apiBrand.updatedAt
  return apiBrand
}
}
