import {validationResult} from "express-validator";
import ApiException from "../exception/api.exception";
import {IRequestAuth} from "../middleware/auth.middleware";
import {NextFunction, Response} from "express";
import todoModel from "../model/todo.model";

type IRequestTodoGet = IRequestAuth & {
  params: {
    id: string,
  }
}

type IRequestTodoDelete = IRequestTodoGet

type IRequestTodoUpdate = IRequestAuth & {
  params: {
    id: string,
    completed: boolean
  }
}


class TodoController {
  async add(req: IRequestAuth, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiException.BadRequest('Ошибка при валидации', errors.array()))
      }

      const { description } = req.body
      const userId = req.user.id
      const newTodo = await todoModel.create({description, userId})

      res.json(newTodo)
    } catch (e) {
      next(e);
    }
  }

  async update(req: IRequestTodoUpdate, res: Response, next: NextFunction) {
    try {
      const {id, completed} = req.params
      const userId = req.user.id

      const todo = await todoModel.update({userId, id: +id, completed});
      return res.json(todo);
    } catch (e) {
      next(e);
    }
  }

  async delete(req: IRequestTodoDelete, res: Response, next: NextFunction) {
    try {
      const {id} = req.params
      const userId = req.user.id

      const todo = await todoModel.delete({userId, id: +id});
      return res.json(todo);
    } catch (e) {
      next(e);
    }
  }

  async get(req: IRequestTodoGet, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id
      const userId = req.user.id

      const todo = await todoModel.findOne({userId, id});
      return res.json(todo);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: IRequestAuth, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id
      const todos = await todoModel.findAll(userId);
      return res.json(todos);
    } catch (e) {
      next(e);
    }
  }
}

export default new TodoController()
