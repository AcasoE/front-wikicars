import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands/brands.service';
import { BrandI } from '../../services/brands/models/brands.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isLogged: boolean = false
  public brands?: BrandI[]
  constructor (
    private brandService: BrandsService,
    private authService: AuthService,

  ){
    this.brandService.getBrands().subscribe((brands)=>{
      this.brands=brands})

  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
      
    })
  }

}
