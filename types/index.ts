interface IUser {
  name: string
  age: number
  email: string
  password: string
}

interface IUserModel extends IUser {
  id: number
}
interface IUserCreate extends IUser {}

interface IUserRegister extends IUser {}

interface IUserLogin {
  email: IUser['email']
  password: IUser['password']
}

interface IToken {
  id: number
  userId: IUserModel['id']
  refreshToken: string
}

export {
  IUser,
  IUserModel,
  IUserCreate,
  IUserRegister,
  IUserLogin,
  IToken
}
