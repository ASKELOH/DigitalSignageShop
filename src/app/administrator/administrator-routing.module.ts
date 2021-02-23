import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoriesResolver } from 'src/app/services/categories-resolver.service';
import { CategoryResolver } from 'src/app/services/category-resolver.service';
import { ProductsResolver } from 'src/app/services/products-resolver.service';
import { ProductResolver } from 'src/app/services/product-resolver.service';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'customer/:id',
    component: CustomerDetailComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    resolve: {
      categories: CategoriesResolver
    }
  },
  {
    path: 'category/:id',
    component: CategoryDetailComponent,
    resolve: {
      category: CategoryResolver
    }
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolver
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
    ProductsResolver,
    ProductResolver
  ]
})
export class AdministratorRoutingModule { }


