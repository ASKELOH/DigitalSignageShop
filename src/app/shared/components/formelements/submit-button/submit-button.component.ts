import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { IFieldConfig } from 'src/app/shared/interfaces/ifield-config';

@Component({
  selector: 'app-submit-button',
  template: `
  <div class="form-group" [formGroup]="group">
    <button type="submit" [class]="field.class">{{field.label}}</button>
  </div>`,
  styles: [],
})
export class SubmitButtonComponent implements OnInit {

  field: IFieldConfig
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {}

}
