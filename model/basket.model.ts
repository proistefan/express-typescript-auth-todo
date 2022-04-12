import DbService from "../service/db.service";
import {ITodo, ITodoAdd, ITodoUpdate, IUserModel} from "../type";
import {ITodoDelete, ITodoFindOne} from "../type/todo";
import ApiException from "../exception/api.exception";
import {IBasketAdd, IBasketDelete, IBasketItem} from "../type/basket";

class BasketModel {
  static async add({id, quantity}: IBasketAdd) {
    const db = await DbService.read()
    
    if (quantity === 0) {
      return await BasketModel.delete({id})
    }

    const existBasketItem = db.basket.find(item => item.id === id)
    
    if (existBasketItem) {
      existBasketItem.count = quantity

      await DbService.write(db)

      return existBasketItem
    } else {
      const foundProduct = db.products.find(item => item.id === id)
          
      if (!foundProduct) {
        throw ApiException.BadRequest('Не найдено product с данным id')
      }
      
      const {image, description, price} = foundProduct
      
      const newBasketItem: IBasketItem = {
        id,
        count: quantity,
        description,
        image,
        price
      }
      
      db.basket.push(newBasketItem)

      await DbService.write(db)

      return newBasketItem
    }
  }

  static async findAll() {
    const db = await DbService.read()
    return db.basket
  }

  static async delete({id}: IBasketDelete) {
    let db = await DbService.read()
    
    const foundBasketItem = db.basket.find(item => item.id === id)

    if (!foundBasketItem) {
      throw ApiException.BadRequest('Не найдено basket item с данным id')
    }

    db.basket = db.basket.filter(item => item !== foundBasketItem)

    await DbService.write(db)

    return
  }
  
  static async getSum(): Promise<number> {
    let db = await DbService.read()

    let sum = 0
    
    db.basket.forEach(item => {
      sum += item.price * item.count
    })

    return sum
  }
}

export default BasketModel
