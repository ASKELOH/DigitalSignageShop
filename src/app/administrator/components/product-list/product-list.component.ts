import { Component, OnInit, ViewChild, ContentChild, ComponentFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagerComponent } from 'src/app/page/components/pager/pager.component';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateEditProductComponent } from 'src/app/shared/modals/create-edit-product/create-edit-product.component';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { FactoryModel } from 'src/app/shared/helper/factory-model';
import { HTTPProcessingType } from 'src/app/shared/enums/httpprocessing-type.enum';
import { DeleteModalComponent } from 'src/app/shared/modals/delete-modal/delete-modal.component';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


interface IProps {
  id: string;
  name: string;
  age: number;
} 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(PagerComponent) pagerComponent: PagerComponent <IProduct>;

  products: IProduct[] = [];
  _products: Observable<IProduct[]>;
  categories: ICategory[] = [];
  collectionParts: IProduct[] = [];
  _collectionParts: Observable<IProduct[]>;
  currentPage: number;
  range: number = 10;
  link: string = "/admin/products";

  closeResult = '';

  constructor(
    private ps: ProductService,
    private cs: CategoryService,
    private route: ActivatedRoute,
    private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    //this.ps.findAll().subscribe(data => this.products = data);
    this._products = this.ps.findAll();
    this.cs.findAll().subscribe(data => this.categories = data);

    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
          this.currentPage = +params['page'] || 1;
          this.pagerComponent.setCurrentPage(this.currentPage);
          this._collectionParts = this.pagerComponent.getCollectionParts();
      });
    },500);
  }

  ngAfterViewInit() {}

  onEdit(e, product: IProduct) {
    e.preventDefault();
    let config = {
      httpProcessingType: HTTPProcessingType._PUT,
      modalType: CreateEditProductComponent,
      componentInstances: [
        {key: "title", value: "Edit product"},
        {key: "product", value: product},
        {key: "categories", value: this.categories}
      ]
    }
    this.initModal<IProduct>(config);
  }

  onNew(e) {
    e.preventDefault();
    let config = {
      httpProcessingType: HTTPProcessingType._POST,
      modalType: CreateEditProductComponent,
      componentInstances: [
        {key: "title", value: "Create new product"},
        {key: "product", value: FactoryModel.create<IProduct>()},
        {key: "categories", value: this.categories}
      ]
    }
    this.initModal<IProduct>(config);
  }

  onDelete(e, product: IProduct) {
    e.preventDefault();
    e.preventDefault();
    let config = {
      httpProcessingType: HTTPProcessingType._DELETE,
      modalType: DeleteModalComponent,
      componentInstances: [
        {key: "title", value: "Produkt löschen"},
        {key: "description", value: `Wollen Sie das Produkt mit der ID ${product.id} wirklich löschen?`},
        {key: "model", value: product}
      ]
    }
    this.initModal<IProduct>(config);
  }

  initModal<T>(config: any): void {
    const modalRef = this.modalService.open(config.modalType, {scrollable: true});

    config.componentInstances.forEach(element => {
      modalRef.componentInstance[element.key] = element.value;
    });

    modalRef.result.then((obj: any) => {
        if (obj === 'close') return;

        switch(config.httpProcessingType) {
          case HTTPProcessingType._POST:
            this.ps.post(obj).subscribe(data => {
              console.log('data', data);
            });
          break;
          case HTTPProcessingType._PUT: 
            this.ps.update(obj['id'], obj).subscribe(data => {
              console.log('data', data);
            });
          break;
          case HTTPProcessingType._DELETE: 
            this.ps.delete(obj['id']).subscribe(data => {
              console.log('data', data);
            });
          break;
        }

      }, (reason) => {
        console.log('ERROR-MODAL: ', reason);
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onDataFilter(data: any): void {
    this._products = this.ps.findAll();

    if(data.length <= 0) return;

    data.forEach(_filter => {
      //this._products = collection.filter(elem => elem[_filter.key] == _filter.value);

      this._products = this._products.pipe(
        map(items => items.filter(elem => elem[_filter.key] == _filter.value))
        )
    });

  }
}


