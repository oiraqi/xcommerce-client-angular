import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from '../../../core/services/proxy.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  brandsURL = 'http://localhost:8080/rest/catalog/brands';
  categoriesURL = 'http://localhost:8080/rest/catalog/categories';

  constructor(private proxyService: ProxyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      if (paramMap) {
        const brandId = parseInt(paramMap.get('brandId'), 10);
        if (brandId || brandId === 0) {
          const href = this.brandsURL + `/${brandId}/products`;
          this.products = this.proxyService.getProducts(href);
          return;
        }
        const categoryId = parseInt(paramMap.get('categoryId'), 10);
        if (categoryId || categoryId === 0) {
          const href = this.categoriesURL + `/${categoryId}/products`;
          this.products = this.proxyService.getProducts(href);
          return;
        }
        this.products = this.proxyService.getProducts();
        return;
      }
      this.products = this.proxyService.getProducts();
    });
  }

}
