import {IProduct} from "./product";

export interface ICategoryProduct {
    id: number
    productId: IProduct['id']
    categoryId: number
    categoryItemId?: number
}

export type ICategory = ICategoryCheckbox | ICategoryRange

export interface ICategoryCheckbox {
    id: number
    code: string
    title: string
    type: 'checkbox'
}

export interface ICategoryRange {
    id: number
    code: string
    title: string
    type: 'range'
    min: number
    max: number
}

export interface ICategoryItem {
    id: number
    parentId: ICategory["id"]
    code: string
    title: string
}