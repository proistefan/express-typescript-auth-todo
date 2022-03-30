export default class ApiException extends Error {
    status: number;
    // @ts-ignore
    errors: any[];

    // @ts-ignore
    constructor(status: number, message: string, errors: any[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiException(401, 'Пользователь не авторизован')
    }
    // @ts-ignore
    static BadRequest(message: string, errors?: any[]) {
        return new ApiException(400, message, errors);
    }
}
