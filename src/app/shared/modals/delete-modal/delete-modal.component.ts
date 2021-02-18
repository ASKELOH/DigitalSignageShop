import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FactoryModel } from '../../helper/factory-model';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent<T> implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() model: T;
  form: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.form = this.initFormGroup();
  }

  get registerFormControl() {
    return this.form.controls;
  }

  private initFormGroup() {
    return this.fb.group({
      id: [this.model['id']]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const obj: IProduct = FactoryModel.createByValues<IProduct>(this.form.value);
      this.activeModal.close(obj);
    }
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
