import asyncFs from 'fs/promises'
import fs from 'fs'
import {IDb} from "../type/db";
import {categories, categoryItems, categoryProductList, products} from "../data";

const dbPath = './db.json'
const initialDb: IDb = {
  users: [],
  tokens: [],
  todos: [],
  basket: [],
  products,
  categories,
  categoryItems,
  categoryProductList,
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
