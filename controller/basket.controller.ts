import {validationResult} from "express-validator";
import ApiException from "../exception/api.exception";
import {NextFunction, Request, Response} from "express";
import {setSuccessResponse} from "../utils";
import basketModel from "../model/basket.model";

type IRequestBasketDelete = {
  params: {
    id: string,
  }
}

type IRequestBasketAdd = {
  body: {
    id: string,
  }
}

class BasketController {
  async add(req: IRequestBasketAdd, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiException.BadRequest('Ошибка при валидации', errors.array()))
      }

      const productId = +req.body.id
      const newBasketItem = await basketModel.add({id: productId})
      res.json(setSuccessResponse(newBasketItem))
    } catch (e) {
      next(e);
    }
  }

  async delete(req: IRequestBasketDelete, res: Response, next: NextFunction) {
    try {
      const productId = +req.params.id
      await basketModel.delete({id: productId});
      return res.json(setSuccessResponse());
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const basketItems = await basketModel.findAll();
      return res.json(setSuccessResponse(basketItems));
    } catch (e) {
      next(e);
    }
  }
}

export default new BasketController()
