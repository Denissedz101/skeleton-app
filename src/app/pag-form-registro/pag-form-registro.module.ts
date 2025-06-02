import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagFormRegistroPageRoutingModule } from './pag-form-registro-routing.module';
import { PagFormRegistroPage } from './pag-form-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagFormRegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PagFormRegistroPage]
})
export class PagFormRegistroPageModule {}
