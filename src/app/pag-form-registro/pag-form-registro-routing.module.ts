import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagFormRegistroPage } from './pag-form-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PagFormRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagFormRegistroPageRoutingModule {}
