import {Response, NextFunction} from "express";
import ApiException from "../exception/api.exception";
import {IRequestAuth} from "./auth.middleware";
import {setFailureResponse} from "../utils";

export default function<T extends Error> (err: T, req: IRequestAuth, res: Response, next: NextFunction) {
    if (err instanceof ApiException) {
        return res.status(err.status).json(setFailureResponse(err.message, err.errors))
    }
    console.log(err)
    return res.status(500).json(setFailureResponse('Непредвиденная ошибка'))
}
