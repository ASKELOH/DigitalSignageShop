import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { IFieldConfig } from 'src/app/shared/interfaces/ifield-config';

@Component({
  selector: 'app-select',
  template: `
  <div class="form-group" [formGroup]="group">
  <label *ngIf="field.label" for="field.name">{{field.label}}</label>
    <select [class]="field.class" [formControlName]="field.name">
      <option value="">Bitte wählen ...</option>
      <option *ngFor="let item of field.options" [value]="item.key">{{item.value}}</option>
    </select>
    <ng-container *ngFor="let validation of field.validations;">
      <span class="error text-danger" *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
    </ng-container>
  </div>`,
  styles: [
  ]
})
export class SelectComponent implements OnInit {

  field: IFieldConfig
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {}

}
