import { Injectable } from '@angular/core';
import { CrudServiceService } from './crud-service.service';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/shared/interfaces/icategory';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudServiceService<ICategory, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/category`);
  }
}
