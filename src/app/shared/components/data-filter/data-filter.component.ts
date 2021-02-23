import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
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

  constructor(private fb: FormBuilder, private cs: CategoryService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      price: ''
    });

    this.initFilterConfig();
  }

  initFilterConfig() {
    this.conf = new DataFilterConfig(this.form, 2);
    const name = new InputElement('Name', 'name', this.form);
    const price = new InputElement('Preis', 'price', this.form);
    this.conf.add(name);
    this.conf.add(price);

    this.cs.findAll().subscribe(data => {
      let options = data.map(obj => {
        return {key: obj.id, value: obj.name};
      });

      const category = new SelectElement('kategorie', 'categoryId', options, this.form);
      this.template = this.conf.generate();

    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.conf.getFilterData(e);
    this.filterData.emit(data);
    this.submitted = true;

  }

}
