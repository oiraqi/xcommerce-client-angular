import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/products/product/product.component';
import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [ProductComponent, ProductsComponent, BrandsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [ProductsComponent, BrandsComponent, CategoriesComponent]
})
export class CatalogModule { }
