import { IProduct } from "./iproduct";

export interface IShoppingCartItem {
    product: IProduct;
    price: number
    quantity: number;

    getTotalPrice(): number;
}
