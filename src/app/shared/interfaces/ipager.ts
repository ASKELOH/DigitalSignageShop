import { Observable } from "rxjs";

export interface IPager<T> {
    pages: number;
    currentPage: number;
    collection: Observable<T[]>;
    range: number;
    display: boolean;
    visiblePrevButton: boolean;
    visibleNextButton: boolean;

    getCurrentPage(): number;
    getPages(): number;
    getPrevPage(): number;
    getNextPage(): number;
    getRange(): number;

    setCurrentPage(page: number): void;
    isVisible(): boolean;
    isVisiblePrevButton(): boolean;
    isVisibleNextButton(): boolean;
    getCollectionParts(): Observable<T[]>;

}
