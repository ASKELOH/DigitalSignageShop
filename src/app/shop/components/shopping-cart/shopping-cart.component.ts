import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IShoppingCartItem } from 'src/app/shared/interfaces/ishopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartItems: IShoppingCartItem[] = [];
  total: number = 0;
  anzahl: number = 0;
  constructor(private scs: ShoppingCartService, private ps: ProductService) {}

  ngOnInit(): void {
    this.scs.getAll().subscribe(data => {
      this.shoppingCartItems = data;
    });
    this._updateTotal();
  }

  onDecrementAmount(productId: number): void {
    this.scs.decrease(productId);
    this._updateTotal();
  }

  onIncrementAmount(productId: number): void {
    this.scs.increase(productId);
    this._updateTotal();
  }

  onDeleteProduct(productId: number): void {
    this.scs.remove(productId);
    this._updateTotal();
    this.scs.getAll().subscribe(data => {
      this.shoppingCartItems = data;
    });
  }

  _updateTotal() {
    this.scs.getTotalPrice().subscribe(data => this.total = data);
    this.scs.getTotalAmount().subscribe(data => this.anzahl = data);
  }
  
}
