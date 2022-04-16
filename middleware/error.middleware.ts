import {Response} from "express";
import ApiException from "../exception/api.exception";
import {IRequestAuth} from "./auth.middleware";
import {setFailureResponse} from "../utils";

export default function<T extends Error> (e: T, req: IRequestAuth, res: Response) {
    if (e instanceof ApiException) {
        return res.status(e.status).json(setFailureResponse(e.message, e.errors))
    }
    console.log(e)
    return res.status(500).json(setFailureResponse('Непредвиденная ошибка'))
}
