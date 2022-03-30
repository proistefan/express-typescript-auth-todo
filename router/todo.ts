import {body} from "express-validator";
import {Router} from "express";

import userController from "../controller/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import todoController from "../controller/todo.controller";

// @ts-ignore
const router = new Router();
router.post('/',
  body('description').isLength({min: 1}),
  todoController.add
);
router.delete('/:id', todoController.delete);
router.get('/:id', authMiddleware, todoController.get);
router.get('/', authMiddleware, todoController.getAll);
router.patch('/', authMiddleware, todoController.update);

export default router
