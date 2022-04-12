import {IProduct} from "./type/product";
import {ICategory, ICategoryItem, ICategoryProduct,} from "./type/categories";
/* eslint-disable */

export const products: IProduct[] = [
    {
        id: 0,
        description: 'BMX Forward ZigZag (2021)',
        image: `${process.env.API_URL}/upload/products/product4.png`,
        price: 24000
    },
    {
        id: 1,
        description: 'BMX Forward ZigZag (2020)',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 34000
    },
    {
        id: 2,
        description: 'Горный велосипед Forward Quadro 27.5 3.0 (2019)',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 30000
    },
    {
        id: 3,
        description: 'Городской велосипед Bear Bike Амстердам (2019)',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 15000
    },
    {
        id: 4,
        description: 'BMX Forward ZigZag (2020)',
        image: `${process.env.API_URL}/upload/products/product4.png`,
        price: 20000
    },
    {
        id: 5,
        description: 'Городской велосипед Bear Bike Амстердам (2019)',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 40000
    }
]

export const categories: ICategory[] = [
    {
        id: 0,
        title: 'Категория',
        code: 'category',
        type: 'checkbox'
    },
    {
        id: 1,
        title: 'Бренд',
        code: 'brand',
        type: 'checkbox'
    },
    {
        id: 2,
        title: 'Цена',
        code: 'price',
        type: 'range',
        min: 11500,
        max: 234790,
    }
]

export const categoryItems: ICategoryItem[] = [
    {
        id: 0,
        parentId: 0,
        code: 'gornie',
        title: 'Горные'
    },
    {
        id: 1,
        parentId: 0,
        code: 'gorodskie',
        title: 'Городские'
    },
    {
        id: 2,
        parentId: 0,
        code: 'fat',
        title: 'Фэтбайки'
    },
    {
        id: 3,
        parentId: 0,
        code: 'dvuhpodvesnie',
        title: 'Двухподвесные'
    },
    {
        id: 4,
        parentId: 0,
        code: 'detskie',
        title: 'Детские'
    },
    {
        id: 5,
        parentId: 0,
        code: 'jenskie',
        title: 'Женские'
    },
    {
        id: 6,
        parentId: 1,
        code: 'cube',
        title: 'CUBE'
    },
    {
        id: 7,
        parentId: 1,
        code: 'merida',
        title: 'MERIDA'
    },
    {
        id: 8,
        parentId: 1,
        code: 'superior',
        title: 'SUPERIOR'
    },
    {
        id: 9,
        parentId: 1,
        code: 'bergamont',
        title: 'BERGAMONT'
    },
    {
        id: 10,
        parentId: 1,
        code: 'specialized',
        title: 'SPECIALIZED'
    },
    {
        id: 11,
        parentId: 1,
        code: 'kona',
        title: 'KONA'
    },
    {
        id: 12,
        parentId: 1,
        code: 'pride',
        title: 'PRIDE'
    },
]

export const categoryProductList: ICategoryProduct[] = [
    {
        id: 0,
        productId: 0,
        categoryId: 0,
        categoryItemId: 0
    },
    {
        id: 1,
        productId: 0,
        categoryId: 0,
        categoryItemId: 1
    },
    {
        id: 2,
        productId: 1,
        categoryId: 0,
        categoryItemId: 1
    },
    {
        id: 3,
        productId: 1,
        categoryId: 0,
        categoryItemId: 0
    },
    {
        id: 4,
        productId: 1,
        categoryId: 1,
        categoryItemId: 11
    },
    {
        id: 5,
        productId: 2,
        categoryId: 1,
        categoryItemId: 10
    },
    {
        id: 6,
        productId: 3,
        categoryId: 1,
        categoryItemId: 9
    },
    {
        id: 7,
        productId: 4,
        categoryId: 1,
        categoryItemId: 6
    },
    {
        id: 8,
        productId: 5,
        categoryId: 1,
        categoryItemId: 7
    },
    {
        id: 9,
        productId: 5,
        categoryId: 1,
        categoryItemId: 8
    },
]
