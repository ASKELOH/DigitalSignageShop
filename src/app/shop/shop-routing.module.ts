import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryProductListComponent } from './components/category-product-list/category-product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoriesResolver } from 'src/app/services/categories-resolver.service';
import { CategoryResolver } from 'src/app/services/category-resolver.service';
import { ProductsResolver } from '../services/products-resolver.service';
import { ProductResolver } from '../services/product-resolver.service';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent,
    resolve: {
      categories: CategoriesResolver
    }
  },
  {
    path: 'category/:id',
    component: CategoryProductListComponent,
    resolve: {
      category: CategoryResolver
    }
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolver
    }
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CategoriesResolver,
    CategoryResolver,
    ProductResolver
  ]
})
export class ShopRoutingModule { }
