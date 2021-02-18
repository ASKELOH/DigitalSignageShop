import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICategory } from '../../interfaces/icategory';
import { IProduct } from '../../interfaces/iproduct';


@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.css']
})
export class CreateEditProductComponent implements OnInit {
  @Input() title: string;
  @Input() product: IProduct;
  @Input() categories: ICategory[]
  productForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productForm = this.initFormGroup();
  }

  get registerFormControl() {
    return this.productForm.controls;
  }

  private initFormGroup() {
    return this.fb.group({
      id: [this.product.id],
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      categoryId: [this.product.categoryId, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      const product: IProduct = {...this.productForm.value};
      this.activeModal.close(product);
    }
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
