import {IProduct} from "./product";
import {ICategory, ICategoryItem} from "./categories";

export interface ICatalogOptions {
    page: number
    limit: number
    sort: 'alp' | 'price-up' | 'price-down'
    filters: ICatalogOptionsFilterItem[]
}

export type ICatalogOptionsFilterItem = {
    code: string
    type: 'checkbox'
    items: string[]
} | {
    code: string
    type: 'range'
    min: number
    max: number
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