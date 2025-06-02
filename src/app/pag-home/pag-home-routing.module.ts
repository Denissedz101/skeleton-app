import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagHomePage } from './pag-home.page';

const routes: Routes = [
  {
    path: '',
    component: PagHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagHomePageRoutingModule {}
