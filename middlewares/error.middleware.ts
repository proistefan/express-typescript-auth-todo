import {Response, NextFunction} from "express";
import ApiError from "../exceptions/api.error";
import {RequestType} from "./auth.middleware";

export default function<T extends Error> (err: T, req: RequestType, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'})
}
