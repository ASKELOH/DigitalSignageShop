import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PagerComponent } from 'src/app/page/components/pager/pager.component';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @ViewChild(PagerComponent) pagerComponent: PagerComponent<ICategory>;

  categories: Observable<ICategory[]>;
  collectionParts: Observable<ICategory[]>;
  currentPage: number;
  range: number = 4;
  link: string = "/shop/categories";

  constructor(
    private cs: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categories = this.cs.findAll(),

    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
          this.currentPage = +params['page'] || 1;
          this.pagerComponent.setCurrentPage(this.currentPage);
          this.collectionParts = this.pagerComponent.getCollectionParts();
      });
    }, 500);
  }

}
