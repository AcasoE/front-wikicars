import { Component } from '@angular/core';
import { BrandsService } from '../../services/brands/brands.service';
import { BrandI } from '../../services/brands/models/brands.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public brands?: BrandI[]
  constructor (
    private brandService: BrandsService
  ){
    this.brandService.getBrands().subscribe((brands)=>{
      this.brands=brands})

  }



}
