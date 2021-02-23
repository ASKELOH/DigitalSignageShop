import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFieldConfig } from "src/app/shared/interfaces/ifield-config";
import { InputComponent } from '../formelements/input/input.component';
import { SelectComponent } from '../formelements/select/select.component';
import { SubmitButtonComponent } from '../formelements/submit-button/submit-button.component';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: IFieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  componentMapper = {
    input: InputComponent,
    select: SelectComponent,
    button: SubmitButtonComponent,
  };

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef 
  ) {}

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      this.componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
