import asyncFs from 'fs/promises'
import fs from 'fs'
import {ITodo, IToken, IUserModel} from "../type";

export interface IDb {
  users: IUserModel[]
  tokens: IToken[]
  todos: ITodo[]
}

const dbPath = './db.json'
const initialDb: IDb = {
  users: [],
  tokens: [],
  todos: []
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
