import {IProduct} from "./type/product";
import {ICategory, ICategoryItem, ICategoryProduct,} from "./type/categories";
/* eslint-disable */

export const products1: IProduct[] = [
    {
        id: 1,
        description: 'CUBE Горный Детский',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 15000
    },
    {
        id: 2,
        description: 'MERIDA Фэтбайк',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 34000
    },
    {
        id: 3,
        description: 'SUPERIOR Городской',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 30000
    },
    {
        id: 4,
        description: 'BERGAMONT Двухподвесный',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 20000
    },
    {
        id: 5,
        description: 'KONA Фэтбайк',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 40000
    },
    {
        id: 6,
        description: 'SPECIALIZED Женский',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 10000
    },
    {
        id: 7,
        description: 'PRIDE Двухподвесный',
        image: `${process.env.API_URL}/upload/products/product4.png`,
        price: 13500
    },
    {
        id: 8,
        description: 'BERGAMONT Городской',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 15500
    },
    {
        id: 9,
        description: 'CUBE Двухподвесный Горный Детский',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 16500
    },
    {
        id: 10,
        description: 'MERIDA Фэтбайк Женский',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 26500
    },
    {
        id: 11,
        description: 'BERGAMONT Двухподвесный',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 20000
    },
    {
        id: 12,
        description: 'KONA Фэтбайк',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 40000
    },
    {
        id: 13,
        description: 'SPECIALIZED Женский',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 10000
    },
    {
        id: 14,
        description: 'PRIDE Двухподвесный',
        image: `${process.env.API_URL}/upload/products/product4.png`,
        price: 13500
    },
    {
        id: 15,
        description: 'BERGAMONT Городской',
        image: `${process.env.API_URL}/upload/products/product1.png`,
        price: 15500
    },
    {
        id: 16,
        description: 'CUBE Двухподвесный Горный Детский',
        image: `${process.env.API_URL}/upload/products/product2.png`,
        price: 16500
    },
    {
        id: 17,
        description: 'MERIDA Фэтбайк Женский',
        image: `${process.env.API_URL}/upload/products/product3.png`,
        price: 26500
    }
]
export const products: IProduct[] = []

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

const productsToAdd1: {
    id: IProduct['id']
    categories: {
        code: ICategory['code'],
        items: ICategoryItem['code'][]
    }[]
}[] = [
    {
        id: 1,
        categories: [
            {
                code: 'category',
                items: ['gornie', 'detskie']
            },
            {
                code: 'brand',
                items: ['cube']
            }
        ]
    },
    {
        id: 2,
        categories: [
            {
                code: 'category',
                items: ['fat']
            },
            {
                code: 'brand',
                items: ['merida']
            }
        ]
    },
    {
        id: 3,
        categories: [
            {
                code: 'category',
                items: ['gorodskie']
            },
            {
                code: 'brand',
                items: ['superior']
            }
        ]
    },
    {
        id: 4,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie']
            },
            {
                code: 'brand',
                items: ['bergamont']
            }
        ]
    },
    {
        id: 5,
        categories: [
            {
                code: 'category',
                items: ['fat']
            },
            {
                code: 'brand',
                items: ['kona']
            }
        ]
    },
    {
        id: 6,
        categories: [
            {
                code: 'category',
                items: ['jenskie']
            },
            {
                code: 'brand',
                items: ['specialized']
            }
        ]
    },
    {
        id: 7,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie']
            },
            {
                code: 'brand',
                items: ['pride']
            }
        ]
    },
    {
        id: 8,
        categories: [
            {
                code: 'category',
                items: ['gorodskie']
            },
            {
                code: 'brand',
                items: ['bergamont']
            }
        ]
    },
    {
        id: 9,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie', 'gornie', 'detskie']
            },
            {
                code: 'brand',
                items: ['cube']
            }
        ]
    },
    {
        id: 10,
        categories: [
            {
                code: 'category',
                items: ['fat', 'jenskie']
            },
            {
                code: 'brand',
                items: ['merida']
            }
        ]
    },
    {
        id: 11,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie']
            },
            {
                code: 'brand',
                items: ['bergamont']
            }
        ]
    },
    {
        id: 12,
        categories: [
            {
                code: 'category',
                items: ['fat']
            },
            {
                code: 'brand',
                items: ['kona']
            }
        ]
    },
    {
        id: 13,
        categories: [
            {
                code: 'category',
                items: ['jenskie']
            },
            {
                code: 'brand',
                items: ['specialized']
            }
        ]
    },
    {
        id: 14,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie']
            },
            {
                code: 'brand',
                items: ['pride']
            }
        ]
    },
    {
        id: 15,
        categories: [
            {
                code: 'category',
                items: ['gorodskie']
            },
            {
                code: 'brand',
                items: ['bergamont']
            }
        ]
    },
    {
        id: 16,
        categories: [
            {
                code: 'category',
                items: ['dvuhpodvesnie', 'gornie', 'detskie']
            },
            {
                code: 'brand',
                items: ['cube']
            }
        ]
    },
    {
        id: 17,
        categories: [
            {
                code: 'category',
                items: ['fat', 'jenskie']
            },
            {
                code: 'brand',
                items: ['merida']
            }
        ]
    },
]

const productsToAdd: {
    id: IProduct['id']
    categories: {
        code: ICategory['code'],
        items: ICategoryItem['code'][]
    }[]
}[] = []

export const categoryProductList: ICategoryProduct[] = addProducts()

function addProducts() {
    fillProducts()
    
    const itemsArr: ICategoryProduct[] = []
    
    productsToAdd.forEach(product => {
        const {id: productId, categories: categoriesProduct} = product

        categoriesProduct.forEach(category => {
            const {code, items} = category
            
            const categoryToAdd = categories.find(item => item.code === code)
            
            if (!categoryToAdd) {
                throw new Error(`Нет такой категории ${code}`)
            }
            
            const itemsToAdd = categoryItems.filter(item => item.parentId === categoryToAdd.id && items.includes(item.code))

            itemsToAdd.forEach(item => {
                itemsArr.push({
                    id: itemsArr.length,
                    productId,
                    categoryId: categoryToAdd.id,
                    categoryItemId: item.id
                })
            })
        })
    })

    return itemsArr
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillProducts() {
    function getRandomCategory() {
        let categories2 = Array.from(categoryItems).filter(item => item.parentId === 1)

        return categories2[getRandomIntInclusive(0, categories2.length - 1)]
    }

    function getRandomCategoryBrands() {
        const categoriesLen = getRandomIntInclusive(1, 4)

        let categoryItems2 = Array.from(categoryItems).filter(item => item.parentId === 0)

        const categories2 = []

        for (let i = 0; i < categoriesLen; i++) {
            const randomNum = getRandomIntInclusive(0, categoryItems2.length - 1)
            if (categoryItems2[randomNum]) {
                categories2.push(categoryItems2[randomNum])
                categoryItems2.splice(randomNum, 1)
            }
        }

        return categories2
    }

    for (let i = 0; i < 100; i++) {
        const category2 = getRandomCategory()
        const categoryItems2 = getRandomCategoryBrands()

        const description = `${category2.title} ${categoryItems2.map(item => item.title).join(' ')}`

        const productItem = {
            id: i,
            description,
            image: `${process.env.API_URL}/upload/products/product${getRandomIntInclusive(1, 4)}.png`,
            price: getRandomIntInclusive(1, 60) * 1000
        }

        const productsToAddItem = {
            id: i,
            categories: [
                {
                    code: 'category',
                    items: categoryItems2.map(item => item.code)
                },
                {
                    code: 'brand',
                    items: [category2.code]
                }
            ]
        }

        products.push(productItem)
        productsToAdd.push(productsToAddItem)
    }
} 
