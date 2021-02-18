import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageRoutingModule } from './page-routing.module';
import { PagerComponent } from './components/pager/pager.component';


@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ContactComponent, 
    PagerComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports: [
    PagerComponent
  ]
})
export class PageModule { }
