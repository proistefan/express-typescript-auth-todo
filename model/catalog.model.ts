import DbService from "../service/db.service";
import {ICatalogItems, ICatalogOptions, IFilterItem} from "../type/catalog";
import {ICategory, ICategoryItem} from "../type/categories";
import {IProduct} from "../type/product";
import {categoryItems, categoryProductList} from "../data";
import {getPageCount} from "../utils";

class CatalogModel {
  static async getItems({page, limit, sort, filters}: ICatalogOptions): Promise<ICatalogItems> {
    const db = await DbService.read()

    const { categories, products } = db
    
    let filteredProducts: ICatalogItems['items'] = []
    
    if (filters.length) {
      filteredProducts = products.filter(product => {
        let isItemInFilter = false
        const id = product.id

        for (let i = 0; i < filters.length; i++) {
          const {code, items} = filters[i]

          if (CatalogModel.isItemInCategory(code, items, id, categories)) {
            isItemInFilter = true
            break
          }
        }

        return isItemInFilter
      }).map(product => ({
        ...product,
        inBasket: false
      }))
    } else {
      filteredProducts = products.map(product => ({
        ...product,
        inBasket: false
      }))
    }
    
    filteredProducts = filteredProducts.slice((page - 1) * limit, page * limit)

    return {
      items: filteredProducts,
      pageCount: getPageCount(limit, filteredProducts.length)
    }
  }

  static async getFilters(): Promise<IFilterItem[]> {
    const db = await DbService.read()

    const filters: IFilterItem[] = []

    db.categories.forEach(category => {
      const {id, title, code, type} = category
      
      const categoryItems = db.categoryItems.filter(categoryItem => categoryItem.parentId === id)
      
      const items = categoryItems.map(categoryItem => ({
        code: categoryItem.code, 
        title: categoryItem.title
      }))
      
      filters.push({
        title,
        code,
        type,
        items,
      })
    })
    
    return filters
  }


  private static isItemInCategory(
      categoryCode: ICategory['code'],
      categoryItemsCode: ICategoryItem['code'][],
      productId: IProduct['id'],
      categories: ICategory[]
  ): boolean {
    const category = categories.find(item => item.code === categoryCode)

    if (category?.type === 'range') {
      return true
    }

    const foundCategoriesProduct = categoryProductList.filter(item => item.categoryId === category?.id && item.productId === productId)

    if (!foundCategoriesProduct.length) {
      return false
    }

    const foundCategoryItemsIds = categoryItems.filter(item => categoryItemsCode.includes(item.code)).map(item => item.id)
    return !!foundCategoriesProduct.filter(item => foundCategoryItemsIds.includes(item.categoryItemId!)).length
  }
}

export default CatalogModel
