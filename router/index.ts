import {Router} from "express";
import user from './user.router'
import todo from "./todo.router";
import product from "./product.router";
import basket from "./basket.router";

import authMiddleware from "../middleware/auth.middleware";

// @ts-ignore
const router = new Router();

router.use(user)
router.use('/todo', authMiddleware, todo)
// router.use('/product', authMiddleware, product)
router.use('/product', product)
router.use('/basket', basket)

export default router
