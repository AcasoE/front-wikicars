import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCarsRoutingModule } from './edit-cars-routing.module';
import { EditCarsComponent } from './edit-cars.component';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [
        EditCarsComponent
    ],
    imports: [
        CommonModule,
        EditCarsRoutingModule,
        SharedModule
    ]
})
export class EditCarsModule { }
