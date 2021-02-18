import { Injectable } from '@angular/core';
import { IShoppingCartService } from '../shared/interfaces/ishopping-cart-service';
import { IProduct } from '../shared/interfaces/iproduct';
import { IShoppingCartItem } from '../shared/interfaces/ishopping-cart-item';
import { Observable, of } from 'rxjs';
import { ShoppingCartItem } from '../shared/models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements IShoppingCartService {

  private _cartItems: IShoppingCartItem[] = [];

  constructor() {
    const cart = new ShoppingCartItem({id: 1, name: 'test', categoryId: 1, price: 23.2}, 1);
    this._cartItems.push(cart);
  }

  getAll(): Observable<IShoppingCartItem[]> {
    return of(this._cartItems);
  }

  getByProductId(productId: number): Observable<IShoppingCartItem> {
    return of(this._cartItems.find(cart => cart.product.id === productId));
  }

  add(product: IProduct, quantity: number, price?: number): void {

    if (! this.ProductExists(product.id)) {
      const cart = new ShoppingCartItem(product, quantity, price);
      this._cartItems.push(cart as IShoppingCartItem);
    }
    else {
      const cart = this._cartItems.find(cart => cart.product.id === product.id);
      cart.quantity += 1;
    }
  }

	changeQuantity(productId: number, quantity: number):void {
    if (! this.ProductExists(productId)) return;
    const cart = this._cartItems.find(cart => cart.product.id === productId);
    cart.quantity = quantity;
  }

	increase(productId: number): void {
    if (! this.ProductExists(productId)) return;
    const cart = this._cartItems.find(cart => cart.product.id === productId);
    cart.quantity += 1;
  }

	decrease(productId: number): void {
    if (! this.ProductExists(productId)) return;
    const cart = this._cartItems.find(cart => cart.product.id === productId);
    if (cart.quantity > 1) cart.quantity -= 1;
  }

	remove(productId: number): void {
    if (! this.ProductExists(productId)) return;
    this._cartItems = this._cartItems.filter(cart => cart.product.id !== productId);
  }

	getProductAmount(productId: number): number {
    if (! this.ProductExists(productId)) return;
    const cart = this._cartItems.find(cart => cart.product.id === productId);
    return cart.getTotalPrice();
  }

	getTotalPrice(): Observable<number> {
    let totalPrice = 0;
    totalPrice = this._cartItems.reduce((accumulator, cart) => { 
      return accumulator += cart.getTotalPrice();
    }, 0);
    return of(totalPrice);
  }

  getTotalAmount(): Observable<number> {
    return of(this._cartItems.length);
  }

  private ProductExists(productId: number): boolean {
    return this._cartItems.find(cart => cart.product.id === productId)? true : false;
  }
}
