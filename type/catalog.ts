import {IProduct} from "./product";
import {ICategory, ICategoryItem} from "./categories";

export interface ICatalogOptions {
    page: number
    limit: number
    sort: 'alp' | 'price-up' | 'price-down'
    filters: ICatalogOptionsFilterItem[]
}

export interface ICatalogOptionsFilterItem {
    code: string,
    items: string[]
}

export interface ICatalogItems {
    items: ICatalogItem[]
    pageCount: number
}

export type ICatalogItem = IProduct & {
    inBasket: boolean
}

export interface IFilterItem {
    title: ICategory['code']
    code: ICategoryItem['code'][keyof ICategoryItem['code']],
    type: ICategory['type'],
    items: {
        title: ICategoryItem['title']
        code: ICategoryItem['code']
    }[]
}