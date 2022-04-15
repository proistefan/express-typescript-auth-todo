import {Router} from "express";
import user from './user.router'
import todo from "./todo.router";
import product from "./product.router";
import basket from "./basket.router";
import catalog from "./catalog.router";
import search from "./search.router";

import authMiddleware from "../middleware/auth.middleware";

// @ts-ignore
const router = new Router();

router.use(user)
router.use('/todo', authMiddleware, todo)
// router.use('/product', authMiddleware, product)
router.use('/product', product)
router.use('/basket', basket)
router.use('/catalog', catalog)
router.use('/search', search)

export default router
