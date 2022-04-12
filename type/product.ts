export interface IProduct {
    id: number
    image: string
    description: string
    price: number
    // inBasket: boolean
}

export interface IProductItems {
    items: IProduct[]
    count: number
}


export const products: IProduct[] = [
    {
        id: 1,
        description: 'BMX Forward ZigZag (2020)',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        // inBasket: false,
        price: 34000
    },
    {
        id: 2,
        description: 'Горный велосипед Forward Quadro 27.5 3.0 (2019)',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        // inBasket: false,
        price: 30000
    },
    {
        id: 3,
        description: 'Городской велосипед Bear Bike Амстердам (2019)',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        // inBasket: false,
        price: 15000
    },
    {
        id: 4,
        description: 'BMX Forward ZigZag (2020)',
        image: `${process.env.API_URL}/upload/products/product4.png`,
        // inBasket: false,
        price: 20000
    },
    {
        id: 5,
        description: 'Городской велосипед Bear Bike Амстердам (2019)',
        image: `${process.env.API_URL}/upload/products/product5.png`,
        // inBasket: false,
        price: 40000
    }
]
