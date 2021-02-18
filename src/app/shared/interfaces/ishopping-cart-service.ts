import { Observable, of } from 'rxjs';
import { IProduct } from './iproduct';

export interface IShoppingCartService {
    add(product: IProduct, quantity: number, price?: number): void;
	changeQuantity(productId: number, quantity: number): void;
	increase(productId: number): void;
	decrease(productId: number): void;
	remove(productId: number): void;
	getProductAmount(productId: number): number;
	getTotalPrice(): Observable<number>;
	getTotalAmount(): Observable<number>;
}
