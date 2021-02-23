import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../shared/interfaces/icategory';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<ICategory> {

  constructor(private cs: CategoryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ICategory> {
      return this.cs.findOne(+route.paramMap.get('id'));
  }
}
