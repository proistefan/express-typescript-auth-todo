import {body} from "express-validator";
import {Router} from "express";

import todoController from "../controller/todo.controller";

// @ts-ignore
const router = new Router();
router.post('/',
  body('description').isLength({min: 1}),
  todoController.add
);
router.delete('/:id', todoController.delete);
router.get('/:id', todoController.get);
router.get('/', todoController.getAll);
router.patch('/', todoController.update);

export default router
