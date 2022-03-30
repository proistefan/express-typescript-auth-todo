import {Router} from "express";
import user from './user'

// @ts-ignore
const router = new Router();

router.use(user)

export default router
