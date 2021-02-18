import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { IDataFilterConfig } from '../../interfaces/idata-filter-config';
import { DataFilterConfig } from '../../models/data-filter-config';
import { InputElement } from '../../models/input-element';
import { SelectElement } from '../../models/select-element';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css']
})
export class DataFilterComponent implements OnInit {
  //@Input() conf: IDataFilterConfig;
  @Output() filterData = new EventEmitter<any>();
  conf: DataFilterConfig;
  submitted: boolean = false;
  form: FormGroup;
  template: string;

  constructor(private fb: FormBuilder, private cs: CategoryService) {
    
    this.conf = new DataFilterConfig(2);
    const name = new InputElement('Name', 'name');
    const price = new InputElement('Preis', 'price');
    this.conf.add(name);
    this.conf.add(price);

    this.cs.findAll().subscribe(data => {
      let options = data.map(obj => {
        return {key: obj.id, value: obj.name};
      });

      const category = new SelectElement('kategorie', 'categoryId', options);
      this.template = this.conf.generate();

    });
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      price: ''
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.conf.getFilterData(e);
    this.filterData.emit(data);
    this.submitted = true;

  }

}
