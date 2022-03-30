import {Router} from "express";
import user from './user'
import todo from "./todo";

import authMiddleware from "../middleware/auth.middleware";

// @ts-ignore
const router = new Router();

router.use(user)
router.use('/todo', authMiddleware, todo)

export default router
