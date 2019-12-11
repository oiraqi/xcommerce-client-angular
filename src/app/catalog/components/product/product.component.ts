import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;

  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = 'http://localhost:8080/images/' + this.getBrandId() + '/' + this.product.image;
  }

  getBrandId() {
    const brandHref = this.product._links.brand.href;
    const temp = brandHref.substring(brandHref.indexOf('/products/') + 10);
    return temp.substring(0, temp.indexOf('/'));
  }

}
