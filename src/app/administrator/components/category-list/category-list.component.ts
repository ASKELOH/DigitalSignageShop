import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private route: ActivatedRoute, private cs: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data['categories'];
  }

}
