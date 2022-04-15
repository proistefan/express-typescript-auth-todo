import {validationResult} from "express-validator";
import ApiException from "../exception/api.exception";
import {NextFunction, Request, Response} from "express";
import ProductModel from "../model/product.model";
import {setSuccessResponse} from "../utils";

type IRequestProductGet = Request & {
    query: {
        q: string,
    }
}

class SearchController {
    async getByQuery(req: IRequestProductGet, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiException.BadRequest('Ошибка при валидации', errors.array()))
            }
            
            const query = req.query.q
            
            const foundProducts = await ProductModel.getByQuery(query)
            res.json(setSuccessResponse(foundProducts))
        } catch (e) {
            next(e);
        }
    }
}

export default new SearchController()
