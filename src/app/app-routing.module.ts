import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/components/about/about.component';
import { ContactComponent } from './page/components/contact/contact.component';
import { HomeComponent } from './page/components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
