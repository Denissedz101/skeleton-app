import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagLoginPageRoutingModule } from './pag-login-routing.module';
import { PagLoginPage } from './pag-login.page';

@NgModule({
  declarations: [PagLoginPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PagLoginPageRoutingModule
  ]
})
export class PagLoginPageModule {}

