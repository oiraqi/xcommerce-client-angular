import { Component, OnInit } from '@angular/core';
import { ProxyService } from 'src/app/core/services/proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: any;

  constructor(private proxyService: ProxyService,
              private router: Router) { }

  ngOnInit() {
    this.brands = this.proxyService.getBrands();
  }

  navigate(brandId: number) {
    this.router.navigateByUrl(`/products?brandId=${brandId}`);
  }

}
