import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { ShopModule } from './shop/shop.module';
import { HttpClientModule } from '@angular/common/http';
import { AdministratorModule } from './administrator/administrator.module';
import { CreateEditProductComponent } from './shared/modals/create-edit-product/create-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './shared/modals/delete-modal/delete-modal.component';
import { InputComponent } from './shared/components/formelements/input/input.component';
import { SelectComponent } from './shared/components/formelements/select/select.component';
import { SubmitButtonComponent } from './shared/components/formelements/submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditProductComponent,
    DeleteModalComponent,
    InputComponent,
    SelectComponent,
    SubmitButtonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PageModule,
    ShopModule,
    AdministratorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
