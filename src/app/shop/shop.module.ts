import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ShopRoutingModule } from './shop-routing.module';
import { PageModule } from '../page/page.module';
import { CategoryProductListComponent } from './components/category-product-list/category-product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';

@NgModule({
  declarations: [
    CategoryListComponent, 
    CategoryItemComponent, CategoryProductListComponent, ProductDetailComponent, ShoppingCartComponent, ShoppingCartButtonComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    PageModule
  ]
})
export class ShopModule { }
