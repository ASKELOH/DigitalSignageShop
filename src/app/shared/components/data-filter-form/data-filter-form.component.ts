import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { IFieldConfig } from 'src/app/shared/interfaces/ifield-config';

@Component({
  selector: 'app-data-filter-form',
  templateUrl: './data-filter-form.component.html',
  styleUrls: ['./data-filter-form.component.css']
})
export class DataFilterFormComponent implements OnInit {
  @Input() fields: IFieldConfig[] = [];
  @Input() numberOfColumns: number = 1;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  grid: number = 12;
  cols: number;
  colClass: string;
  currentColumnsCount: number = 0;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.createControl();
    this.cols = this.grid / this.numberOfColumns;
    this.colClass = `col-md-${this.cols}`;
  }

  get value() {
    return this.form.value;
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  createControl() {
    const group = this.fb.group({});
      this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

}
