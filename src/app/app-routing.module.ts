import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test/test.module').then(m => m.TestPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/product/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/product/buy/buy.module').then( m => m.BuyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
