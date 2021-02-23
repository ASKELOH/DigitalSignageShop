import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { IFieldConfig } from 'src/app/shared/interfaces/ifield-config';

@Component({
  selector: 'app-input',
  template: `
  <div class="form-group" [formGroup]="group">
  <label *ngIf="field.label" for="field.name">{{field.label}}</label>
    <input [class]="field.class" [formControlName]="field.name" [placeholder]="field.placeholder? field.placeholder : ''" [type]="field.inputType">
    <ng-container *ngFor="let validation of field.validations;">
      <span class="error text-danger" *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
    </ng-container>
  </div>`,
  styles: []
})
export class InputComponent implements OnInit {

  field: IFieldConfig
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
