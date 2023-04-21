import { Pipe, PipeTransform } from '@angular/core';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {


    transform(cars: CarI[], currentPage: number, pageSize: number): any[] {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return cars.slice(startIndex, endIndex);
    }
}
