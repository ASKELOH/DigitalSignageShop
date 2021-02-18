import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  category: ICategory;
  imgSrc: String = "assets/images/product-images/";
  imgAlt: String = "";
  constructor(
    private route: ActivatedRoute,
    private ps: ProductService,
    private cs: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.ps.findOne(id).subscribe(data => {
        this.product = data;
        this.cs.findOne(this.product.categoryId).subscribe(data => {
          this.category = data;
          this.imgSrc += `${this.product.categoryId}_${this.product.id}.jpg`;
          this.imgAlt = this.product.name;
        });
      });
    });
  }

}
