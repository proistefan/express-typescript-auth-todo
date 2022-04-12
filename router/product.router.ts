import {query} from "express-validator";
import {Router} from "express";

import productController from "../controller/product.controller";

// @ts-ignore
const router = new Router();
router.get('/',
    query('ids').isString(),
    productController.getByIds
);

export default router
