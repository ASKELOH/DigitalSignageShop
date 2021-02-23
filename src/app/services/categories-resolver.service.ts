import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../shared/interfaces/icategory';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve<ICategory[]> {

  constructor(private cs: CategoryService) { }

  resolve(): Observable<ICategory[]> {
    return this.cs.findAll();
  }
}
