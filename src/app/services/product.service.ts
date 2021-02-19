import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IProduct } from '../shared/interfaces/iproduct';
import { CrudServiceService } from './crud-service.service';

import { environment } from '../../environments/environment';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudServiceService<IProduct, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/product`);
  }

  getByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._base + "/category/" + categoryId).pipe(
      retry(3)
    );
  }
}





