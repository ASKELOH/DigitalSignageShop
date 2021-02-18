import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagerComponent } from 'src/app/page/components/pager/pager.component';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.css']
})
export class CategoryProductListComponent implements OnInit {
  @ViewChild(PagerComponent) pagerComponent: PagerComponent<IProduct>;

  range: number = 3;
  category: ICategory;
  products: IProduct[];
  collectionParts: IProduct[];
  currentPage: number;
  link: string = "/shop/category/";

  constructor(
    private route: ActivatedRoute, 
    private cs: CategoryService,
    private ps: ProductService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const categoryId = +params.id;
      this.link = this.link + categoryId;

      this.cs.findOne(categoryId).subscribe(data => this.category = data);
      this.ps.getByCategoryId(categoryId).subscribe(data => this.products = data);
    });

    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
          this.currentPage = +params['page'] || 1;
          this.pagerComponent.setCurrentPage(this.currentPage);
          this.collectionParts = this.pagerComponent.getCollectionParts();
      });
    }, 500);
  }

}
