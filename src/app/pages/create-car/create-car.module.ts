import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedCarRoutingModule } from './create-car-routing.module';
import { CreateCarComponent } from './create-car.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        CreateCarComponent
    ],
    imports: [
        CommonModule,
        CreatedCarRoutingModule,
        SharedModule
    ]
})
export class CreatedCarModule { }
