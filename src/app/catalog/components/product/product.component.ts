import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shoppingcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;

  imagePath: string;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.imagePath = 'http://localhost:8080/images/' + this.product.brand.id + '/' + this.product.image;
  }

  addToShoppingCart() {
    this.shoppingCartService.addProduct(this.product, 1);
  }

}
