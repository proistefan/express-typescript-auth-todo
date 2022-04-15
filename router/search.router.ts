import {query} from "express-validator";
import {Router} from "express";

import searchController from "../controller/search.controller";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const router: Router = new Router();
router.get('/',
    query('q').isString(),
    searchController.getByQuery
);

export default router
