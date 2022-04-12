import DbService from "../service/db.service";
import {ITodo, ITodoAdd, ITodoUpdate, IUserModel} from "../type";
import {ITodoDelete, ITodoFindOne} from "../type/todo";
import ApiException from "../exception/api.exception";
import {IBasketAdd, IBasketDelete, IBasketItem} from "../type/basket";

class TodoModel {
  static async add({id}: IBasketAdd) {
    const db = await DbService.read()

    const existBasketItemIndex = db.basket.findIndex(item => item.id === id)

    if (existBasketItemIndex >= 0) {
      db.basket[existBasketItemIndex].count += 1

      await DbService.write(db)

      return db.basket[existBasketItemIndex]
    } else {
      const foundProduct = db.products.find(item => item.id === id)
          
      if (!foundProduct) {
        throw ApiException.BadRequest('Не найдено product с данным id')
      }
      
      const {image, description, price} = foundProduct
      
      const newBasketItem: IBasketItem = {
        id,
        count: 1,
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
}

export default TodoModel
