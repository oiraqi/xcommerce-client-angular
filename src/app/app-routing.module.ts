import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './catalog/components/products/products.component';
import { ShoppingCartComponent } from './core/components/shoppingcart/shoppingcart.component';
import { CategoriesComponent } from './catalog/components/categories/categories.component';
import { BrandsComponent } from './catalog/components/brands/brands.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
