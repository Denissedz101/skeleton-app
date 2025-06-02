import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

import { PagLoginPageModule } from '../pag-login/pag-login.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    PagLoginPageModule   
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
