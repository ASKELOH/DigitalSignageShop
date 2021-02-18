import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pager } from 'src/app/shared/models/pager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent<T> implements OnInit {
  @Input() collection: Observable<T[]>;
  @Input() range: number;
  @Input() link: string;
  pager: Pager<T>;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.pager = new Pager<T>(this.collection, this.range);
  }

  setCurrentPage(page: number) {
    this.pager.setCurrentPage(page);
  }

  getCollectionParts(): Observable<T[]> {
    return this.pager.getCollectionParts();
  }
 
}
