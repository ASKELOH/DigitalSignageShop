import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

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
    component: CategoryListComponent
  },
  {
    path: 'category/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }


