import { Component, Input, OnInit } from '@angular/core';
import { Pager } from 'src/app/shared/models/pager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent<T> implements OnInit {
  @Input() collection: T[] = [];
  @Input() range: number;
  @Input() link: string;
  pager: Pager<T>;

  constructor() {}

  ngOnInit(): void {}
  
  ngOnChanges() {
    if(! this.pager) {
      this.pager = new Pager<T>(this.collection, this.range);
    } else {
      this.pager.setCollection(this.collection);
      this.pager.init();
    }
  }

  reinitialize(collection: T[]) {
    this.pager.setCollection(collection);
    this.pager.setCurrentPage(1);
  }

  setCurrentPage(page: number) {
    this.pager.setCurrentPage(page);
  }

  getCollectionParts(): T[] {
    return this.pager.getCollectionParts();
  }
 
}
