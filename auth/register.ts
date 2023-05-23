import {User} from './user.interface'
import {AuthError} from "./auth-errors"

export const register = (username: string, password: string, userList: Array<User>, activeUser: User) : User => {
    if (activeUser.isAuth) throw AuthError.AuthError(`You must log out before registering`)
    if (!username || !password) throw AuthError.ValidationError(`Login or password can not be empty`)
    if (username.length <= 5) throw AuthError.ValidationError(`Login must be longer than 5 characters`)
    if (password.length <= 6) throw AuthError.ValidationError(`Password must be longer than 6 characters`)
    if (userList.some(user => user.username === username)) throw AuthError.ValidationError(`Username: "${username}" is already registered`)

    userList.push({
        username,
        password,
        isAuth: true,
    })

    return {
        username,
        password,
        isAuth: true,
    }
}
