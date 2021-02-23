import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IProduct } from '../shared/interfaces/iproduct';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<IProduct[]> {

  constructor(private ps: ProductService) { }

  resolve(): Observable<IProduct[]> {
    return this.ps.findAll();
  }
}
