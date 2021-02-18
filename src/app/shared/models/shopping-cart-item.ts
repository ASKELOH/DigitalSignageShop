import { IProduct } from "../interfaces/iproduct";
import { IShoppingCartItem } from "../interfaces/ishopping-cart-item";

export class ShoppingCartItem implements IShoppingCartItem {
    product: IProduct;
    price: number
    quantity: number;

    constructor(product: IProduct, quantity: number = 1, price?: number) {
        this.product = product;
        this.price = price >= 0? price : this.product.price;
        this.quantity = quantity;
    }

    getTotalPrice(): number {
        return this.price * this.quantity;
    }
}
