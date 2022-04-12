import {IProduct} from "./product";

export interface IBasketItem {
    id: IProduct["id"]
    description: IProduct["description"]
    image: IProduct["image"]
    price: IProduct["price"]
    count: number
}

export interface IBasketAdd {
    id: IProduct['id']
}

export interface IBasketDelete extends IBasketAdd {}
