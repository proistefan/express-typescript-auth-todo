import asyncFs from 'fs/promises'
import fs from 'fs'
import {ITodo, IToken, IUserModel} from "../type";
import {IProduct, products} from "../type/product";
import {IBasketItem} from "../type/basket";

export interface IDb {
  users: IUserModel[]
  tokens: IToken[]
  todos: ITodo[]
  products: IProduct[]
  basket: IBasketItem[]
}

const dbPath = './db.json'
const initialDb: IDb = {
  users: [],
  tokens: [],
  todos: [],
  products,
  basket: [],
}

class DbService {
  static async read(): Promise<IDb> {
    if (!fs.existsSync(dbPath)) {
      await DbService.create()
    }
    const db = await asyncFs.readFile(dbPath)
    return JSON.parse(db.toString())
  }

  static async write(data: IDb) {
    await asyncFs.writeFile(dbPath, JSON.stringify(data))
  }

  static async create() {
    await asyncFs.writeFile(dbPath, JSON.stringify(initialDb))
  }
}

export default DbService
