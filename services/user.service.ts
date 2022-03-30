import bcrypt from "bcrypt";

import UserModel from '../models/user.model';
import tokenService from './token.service';
import ApiError from "../exceptions/api.error";
import {IUserLogin, IUserModel, IUserRegister} from "../types";

interface ILoginResult {
    user: IUserModel,
    accessToken: string,
    refreshToken: string
}

class UserService {
    async registration(user: IUserRegister) {
        const {email, age, name, password} = user

        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const createdUser = await UserModel.create({
            email,
            age,
            name,
            password: hashPassword
        })

        const tokens = tokenService.generateTokens({...createdUser});
        await tokenService.saveToken(createdUser.id, tokens.refreshToken);

        return {...tokens, user: createdUser}
    }

    async login(user: IUserLogin): Promise<ILoginResult> {
        const foundUser = await UserModel.findOne(user)
        if (!foundUser) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }

        const isPasswordsEquals = await bcrypt.compare(user.password, foundUser.password);
        if (!isPasswordsEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }

        const tokens = tokenService.generateTokens({...foundUser});
        await tokenService.saveToken(foundUser.id, tokens.refreshToken);

        return {...tokens, user: foundUser}
    }

    async logout(refreshToken: string) {
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken: string): Promise<ILoginResult> {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken) as IUserModel | null;
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id);
        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const tokens = tokenService.generateTokens({...user});

        await tokenService.saveToken(user.id, tokens.refreshToken);
        return {...tokens, user}
    }

    async getAllUsers() {
        return await UserModel.findAll();
    }
}

export default new UserService();
