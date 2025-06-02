import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagHomePageRoutingModule } from './pag-home-routing.module';

import { PagHomePage } from './pag-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagHomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PagHomePage]
})
export class PagHomePageModule {}
