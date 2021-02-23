import { IPager } from "../interfaces/ipager";

export class Pager<T> implements IPager<T> {
    pages: number;
    currentPage: number = 1;
    collection: T[] = [];
    collectionParts: T[] = [];
    range: number;
    display: boolean = true;
    visiblePrevButton: boolean = true;
    visibleNextButton: boolean = true;

    constructor(collection: T[], range: number = 1) {
        this.collection = collection;
        this.range = range;
        this.init();
    }

    init() {
        this.initPages();
        this.initCollectionParts();
        this.initDisplayButtons();
    }

    private initPages(): void {
        if (this.collection.length <= this.range) {
            this.pages = 1;
            this.display = false;
        } else {
            const result = this.collection.length / this.range;
            this.pages = Math.ceil(result);
            this.display = true;
        }
    }

    initCollectionParts(): void {
        const start = (this.currentPage === 1)? 0 : (this.currentPage - 1) * this.range;
        const end = this.currentPage * this.range;
        this.collectionParts = this.collection.slice(start, end);
    }

    private initDefaultCollectionParts(): void {
        const start = 0;
        const end = this.range;
        this.collectionParts = this.collection.slice(start, end);
        this.initDisplayButtons();
    }

    private initDisplayButtons(): void {
        if(! this.display) return;
        this.visibleNextButton = (this.currentPage < this.pages)? true : false;
        this.visiblePrevButton = (this.currentPage > 1)? true : false;
    }

    private isValidPage(page: number): boolean {
        return page > 0 && page <= this.pages;
    }

    resetPage(): void {
        this.currentPage = 1;
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
            this.init();
        }
        else {
            this.initDefaultCollectionParts();
        }
    }

    setCollection(collection: T[]) {
        this.collection = collection;
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

    getCollectionParts(): T[] {
        return this.collectionParts;
    }
}
