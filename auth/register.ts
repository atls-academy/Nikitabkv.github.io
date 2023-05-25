import {User} from './user.interface'
import {AuthError} from "./auth-errors"
import * as bcrypt from 'bcrypt'

export const register = (username: string, password: string, userList: Array<User>, activeUser: User) : string => {
    if (activeUser === null || activeUser === undefined) throw AuthError.ValidationError(`ActiveUser is: ${typeof activeUser}}`)
    if (activeUser.isAuth) throw AuthError.AuthError(`You must log out before registering`)
    if (!username || !password) throw AuthError.ValidationError(`Login or password can not be empty`)
    if (username.length <= 5) throw AuthError.ValidationError(`Login must be longer than 5 characters`)
    if (password.length <= 6) throw AuthError.ValidationError(`Password must be longer than 6 characters`)
    if (userList.some(user => user.username === username)) throw AuthError.ValidationError(`Username: "${username}" is already registered`)

    const hashedPassword = bcrypt.hashSync(password, 5)
    const newUser: User = {
        username,
        password: hashedPassword,
        isAuth: true,
    }
    userList.push(newUser)
    return newUser.username
}
