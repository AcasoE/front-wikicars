import { CarService } from './../../../core/services/car/car.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CarI } from 'src/app/core/services/car/models/car.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { brandsOptions, tractionOptions, carOptions } from './config/form.config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public car?: CarI;
  @Input() public validationMode: boolean = false;
  public carForm?: FormGroup;
  public brandsOptions = brandsOptions;
  public tractionoptions = tractionOptions;
  public carOptions = carOptions;
  public hasFormErrors: boolean = false;
  public submit: boolean = false;
  public carToReviseFinish: boolean = false
  public carToValidateImage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private carService: CarService
  ) { }

  public ngOnInit(): void {
    this.initForm()
  }
  public carAction(){
    if (this.carForm?.valid){
      if(this.validationMode){
        this.editCar()
      } else {
        this.createCar()
      }
      this.carForm.reset()
    } else{
      this.hasFormErrors = true
    }

  }
  public createCar(){
    this.hasFormErrors = false
    this.carService.createCarToRevise(this.carForm?.value).subscribe((car)=>{
      this.carToReviseFinish = true
      setTimeout(()=>{
        this.router.navigate(['../cars-list'])
      }, 3000)
    })

  }
  public editCar(){
    if(!this.car){return}
    this.hasFormErrors = false
  }
  public initForm() {
    this.carForm = this.formBuilder.group({
      brand: new FormControl(this.car?.brand || '', [Validators.required]),
      model: new FormControl(this.car?.model || '', [Validators.required]),
      type: new FormControl(this.car?.type || '', [Validators.required]),
      power: new FormControl(this.car?.power || '', [Validators.required, Validators.maxLength(4)]),
      par: new FormControl(this.car?.par || '', [Validators.required, Validators.maxLength(4)]),
      engineType: new FormControl(this.car?.engineType || '', [Validators.required, Validators.maxLength(20)]),
      engineCil: new FormControl(this.car?.engineCil || '', [Validators.required]),
      traction: new FormControl(this.car?.traction || '', [Validators.required]),
      year: new FormControl(this.car?.year || '', [Validators.required, Validators.maxLength(4)]),
      heigh: new FormControl(this.car?.heigh || '', [Validators.required, Validators.maxLength(4)]),
      speed: new FormControl(this.car?.speed || '', [Validators.required, Validators.maxLength(3)]),
      image: new FormControl(this.car?.image || '', [Validators.required]),
    })
  }

}
