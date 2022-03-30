import {Request, Response, NextFunction} from 'express'
import ApiException from "../exception/api.exception";
import tokenService from '../service/token.service';
import {IUserLogin} from "../type";

export type RequestType = Request & {
    user: IUserLogin
}

export default function (req: RequestType, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiException.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiException.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken) as IUserLogin;
        if (!userData) {
            return next(ApiException.UnauthorizedError());
        }

        req.user = userData;
        next();
    } catch (e) {
        console.log(e)
        return next(ApiException.UnauthorizedError());
    }
}
