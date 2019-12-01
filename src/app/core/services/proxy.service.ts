import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private baseURL = 'http://localhost:8080';
  private productsURL = this.baseURL + '/rest/catalog/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get(this.productsURL).subscribe((response: any) => {
      console.log(response);
    });
  }
}
