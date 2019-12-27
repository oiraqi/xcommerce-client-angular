import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  totalPrice = 0;
  numberOfProducts = 0;
  content = {};
  elements = [];

  constructor() { }

  addProduct(product: any, quantity: number) {
    if (product.id in this.content) {
      this.content[product.id].quantity += quantity;
    } else {
      this.content[product.id] = {};
      this.content[product.id].product = product;
      this.content[product.id].quantity = quantity;
      this.elements.push(this.content[product.id]);
    }
    this.totalPrice += product.price * quantity;
    this.numberOfProducts += quantity;
  }

  removeProductQuantity(product: any, quantity: number) {
    if (product.id in this.content) {
      if (this.content[product.id].quantity > quantity) {
        this.content[product.id].quantity -= quantity;
        this.totalPrice -= product.price * quantity;
        this.numberOfProducts -= quantity;
      } else {
        this.elements = this.elements.filter(element => element.product !== product);
        this.totalPrice -= product.price * this.content[product.id].quantity;
        this.numberOfProducts -= this.content[product.id].quantity;
        delete this.content[product.id];
      }
    }
  }

  removeProduct(product: any) {
    if (product.id in this.content) {
      this.removeProductQuantity(product, this.content[product.id].quantity);
    }
  }
}
