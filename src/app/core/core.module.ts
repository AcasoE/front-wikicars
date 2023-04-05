import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent
  ]
})
export class CoreModule { }
