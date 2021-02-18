import { Injectable } from '@angular/core';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from 'src/app/shared/interfaces/icustomer';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CrudServiceService<ICustomer, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/customer`);
  }
}
