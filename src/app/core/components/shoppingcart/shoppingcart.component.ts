import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns = ['product', 'price', 'quantity', 'actions'];

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

}
