import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../../../core/services/proxy.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public proxyService: ProxyService) { }

  ngOnInit() {
    this.proxyService.getProducts();
  }

}
