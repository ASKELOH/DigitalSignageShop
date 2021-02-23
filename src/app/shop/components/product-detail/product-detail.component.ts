import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  category: ICategory;
  product: IProduct;
  imgSrc: String = "assets/images/product-images/";
  imgAlt: String;

  constructor(
    private route: ActivatedRoute,
    private cs: CategoryService,
    private ps: ProductService,
    private scs: ShoppingCartService
    ) { }

  ngOnInit(): void {

    this.product = this.route.snapshot.data['product'];
    if(this.product) {
      this.cs.findOne(this.product.categoryId).subscribe(data => {
        this.category = data;
        this.imgSrc += `${this.product.categoryId}_${this.product.id}.jpg`;
        this.imgAlt = this.product.name;
      });
    }
  }

  onAddProductToCart(product: IProduct): void {
    this.scs.add(product, 1);
  }

}
