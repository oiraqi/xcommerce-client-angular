import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService,
              private router: Router) { }

  ngOnInit() {
  }

  search() {
    console.log('Hi!');
  }

  navigate() {
    this.router.navigateByUrl('/shoppingCart');
  }

}
