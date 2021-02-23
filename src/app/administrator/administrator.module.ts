import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { PageModule } from '../page/page.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SanitizeHtmlPipePipe } from '../shared/helper/sanitize-html-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFilterFormComponent } from '../shared/components/data-filter-form/data-filter-form.component';
import { DynamicFieldDirective } from '../shared/components/dynamic-field/dynamic-field.directive';
import { DataFilterComponent } from '../shared/components/data-filter/data-filter.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    NavComponent,
    SanitizeHtmlPipePipe,
    DataFilterFormComponent,
    DataFilterComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    HttpClientModule,
    PageModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class AdministratorModule { }
