import userService from "../services/user.service";
import {validationResult} from "express-validator";
import ApiError from "../exceptions/api.error";
import {Response, NextFunction} from "express";
import {RequestType} from "../middlewares/auth.middleware";
import UserModel from "../models/user.model";

class UserController {
    async registration(req: RequestType, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password, age, name} = req.body;
            const userData = await userService.registration({email, password, age, name});
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req: RequestType, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            const user = await UserModel.findOne({email})
            if (!user) {
                return next(ApiError.UnauthorizedError())
            }
            const userData = await userService.login({email, password});
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req: RequestType, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: RequestType, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req: RequestType, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }
}


export default new UserController();
