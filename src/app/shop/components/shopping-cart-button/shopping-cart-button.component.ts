import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.css']
})
export class ShoppingCartButtonComponent implements OnInit {

  count: number = 0;
  constructor(private scs: ShoppingCartService) {}

  ngOnInit(): void {
    this.updateCount();
  }

  updateCount(): void {
    this.scs.getTotalAmount().subscribe(data => {
      this.count = data;
  });
}


}
