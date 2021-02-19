import { IProduct } from "./iproduct";

export interface ICategory {
    id: number;
	name: string;
    products: IProduct[];
}
