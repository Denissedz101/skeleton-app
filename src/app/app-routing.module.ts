import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
  path: 'pag-login',
  loadComponent: () => import('./pag-login/pag-login.page').then(m => m.PagLoginPage)
  },
  {
    path: 'pag-form-registro',
    loadChildren: () => import('./pag-form-registro/pag-form-registro.module').then( m => m.PagFormRegistroPageModule)
  },
  {
    path: 'pag-home',
    loadChildren: () => import('./pag-home/pag-home.module').then( m => m.PagHomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
