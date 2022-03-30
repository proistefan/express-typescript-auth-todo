import {Request, Response, NextFunction} from 'express'
import ApiError from "../exceptions/api.error";
import tokenService from '../services/token.service';
import {IUserLogin} from "../types";

export type RequestType = Request & {
    user: IUserLogin
}

export default function (req: RequestType, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken) as IUserLogin;
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        next();
    } catch (e) {
        console.log(e)
        return next(ApiError.UnauthorizedError());
    }
}
