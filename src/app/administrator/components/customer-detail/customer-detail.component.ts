import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from 'src/app/shared/interfaces/icustomer';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: ICustomer;

  constructor(
    private route: ActivatedRoute,
    private cs: CustomerService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.cs.findOne(id).subscribe(data => {
        this.customer = data;
      });
    });
  }

}
