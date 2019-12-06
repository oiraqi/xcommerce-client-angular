import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private baseURL = 'http://localhost:8080';
  private brandsURL = this.baseURL + '/rest/catalog/brands';
  private categoriessURL = this.baseURL + '/rest/catalog/categories';
  private productsURL = this.baseURL + '/rest/catalog/products';
  public products: any[];

  constructor(private httpClient: HttpClient) { }

  private parse(response: any, key: string): any[] {
    return response._embedded[key];
  }

  getProducts() {
    this.httpClient.get(this.productsURL).subscribe((response: any) => {
       this.products = this.parse(response, 'products');
    });
  }

  getBrands() {
    this.httpClient.get(this.brandsURL).subscribe((response: any) => {
      console.log(this.parse(response, 'brands'));
    });
  }
}
