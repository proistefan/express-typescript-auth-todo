export interface IProduct {
    id: number
    image: string
    description: string
    price: number
}

export interface IProductItems {
    items: IProduct[]
    count: number
}
