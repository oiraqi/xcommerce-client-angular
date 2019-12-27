import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private baseURL = 'http://localhost:8080';
  private brandsURL = this.baseURL + '/rest/catalog/brands';
  private categoriesURL = this.baseURL + '/rest/catalog/categories';
  private productsURL = this.baseURL + '/rest/catalog/products';

  constructor(private httpClient: HttpClient) { }

  private parse(response: any, key: string): any[] {
    return response._embedded[key];
  }

  private getId(href: string) {
    return href.substring(href.lastIndexOf('/') + 1);
  }

  getProducts(href: string = this.productsURL) {
    return this.httpClient.get(href)
      .pipe(
        map(response =>
          this.parse(response, 'products')
        ),
        map(products =>
          products.map(product => {
            product.id = this.getId(product._links.product.href);
            return product;
          })
        ),
        switchMap(products =>
          forkJoin(products.map(
              product => this.setBrand(product))))
      );
  }

  private setBrand(product: any) {
    return this.httpClient.get(product._links.brand.href).pipe(map((brand: any) => {
      product.brand = {
        id: this.getId(brand._links.self.href),
        name: brand.name
      };
      return product;
    }));
  }

  getBrands() {
    return this.httpClient.get(this.brandsURL).pipe(
      map(response => this.parse(response, 'brands')),
      map((brands: any[]) => brands.map(brand => {
        brand.id = this.getId(brand._links.brand.href);
        return brand;
      }))
    );
  }

  getCategories(parentId: number = 0) {
    const url = this.categoriesURL + `/${parentId}/subCategories`;
    return this.httpClient.get(url).pipe(
      map(response => this.parse(response, 'categories')),
      map(categories => categories.map (category => {
        category.id = this.getId(category._links.category.href);
        return category;
      }))
    );
  }
}
