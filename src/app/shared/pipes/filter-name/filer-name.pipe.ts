import { Pipe, PipeTransform } from '@angular/core';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Pipe({
  name: 'filerName'
})
export class FilerNamePipe implements PipeTransform {

  private removeAccents(model: string){
   if(model.toLowerCase().includes("í")) {model.replace("í","i")}
   if(model.toLowerCase().includes("é")) {model.replace("é","i")}
   if(model.toLowerCase().includes("ó")) {model.replace("ó","i")}
   if(model.toLowerCase().includes("á")) {model.replace("á","i")}
   if(model.toLowerCase().includes("ú")) {model.replace("ú","i")}
    return model

  }
  transform(value: CarI[], filterKey: string): CarI[] {
    if (!value || !filterKey || filterKey.length < 3) { return value; }

    return value.filter(product => {
      return this.removeAccents(product.model).toLowerCase().includes(filterKey.toLowerCase());
    });


    
  }
}
