import { Observable, from, of } from "rxjs";
import { skip, take, map, toArray, filter, scan, debounceTime, distinctUntilChanged, tap, reduce} from 'rxjs/operators';
import { IPager } from "../interfaces/ipager";

export class Pager<T> implements IPager<T> {
    pages: number;
    currentPage: number = 1;
    collection: Observable<T[]>;
    collectionParts: Observable<T[]>;
    range: number;
    display: boolean = true;
    visiblePrevButton: boolean = true;
    visibleNextButton: boolean = true;

    constructor(collection: Observable<T[]>, range: number = 1) {
        this.collection = collection;
        this.range = range;
        this.initPages();
        this.initDisplayButtons();
    }

    private initPages(): void {
        this.collection.subscribe(collection => {

            if (collection.length <= this.range) {
                this.pages = 1;
                this.display = false;
            } else {
                const result = collection.length / this.range;
                this.pages = Math.ceil(result);
            }

            this.collectionParts = this.collection;
        });
    }

    private initCollectionParts(): void {
        const start = (this.currentPage === 1)? 0 : (this.currentPage - 1) * this.range;
        const end = this.currentPage * this.range;

        this.collectionParts = this.collection.pipe(
            map(selectedItems => {
                return selectedItems.splice(start, end);
            })
        );

        this.initDisplayButtons();
    }

    private initDefaultCollectionParts(): void {
        const start = 0;
        const end = this.range;
        //this.collectionParts = this.collection.slice(start, end);
        /* this.collectionParts = this.collectionParts.pipe(
            skip(start))
            take(this.range)
            ; */
            

        this.initDisplayButtons();
    }

    private initDisplayButtons(): void {
        this.visibleNextButton = (this.currentPage < this.pages)? true : false;
        this.visiblePrevButton = (this.currentPage > 1)? true : false;
    }

    private isValidPage(page: number): boolean {
        return page > 0 && page <= this.pages;
    }

    getCurrentPage(): number {
        return this.currentPage;
    }

    getPages(): number {
        return this.pages;
    }

    getPrevPage(): number {
        const prevPage = this.currentPage - 1;
        return (prevPage >= 1)? prevPage: 1;
    }

    getNextPage(): number {
        const nextPage = this.currentPage + 1;
        return (nextPage < this.pages)? nextPage : this.pages;
    }

    getRange(): number {
        return this.range;
    }

    setCurrentPage(page: number): void {
        if (this.isValidPage(page)) {
            this.currentPage = page;
            this.initCollectionParts();
        }
        else {
            this.initDefaultCollectionParts();
        }
    }

    isVisible(): boolean {
        return this.display;
    }

    isVisiblePrevButton(): boolean {
        return this.visiblePrevButton;
    }

    isVisibleNextButton(): boolean {
        return this.visibleNextButton;
    }

    getCollectionParts(): Observable<T[]> {
        return this.collectionParts;
    }
}
