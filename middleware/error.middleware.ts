import {Response, NextFunction} from "express";
import ApiException from "../exception/api.exception";
import {RequestType} from "./auth.middleware";

export default function<T extends Error> (err: T, req: RequestType, res: Response, next: NextFunction) {
    if (err instanceof ApiException) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'})
}
