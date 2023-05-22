import {User} from './user.interface'
import {AuthError} from "./authErrors"

export const login = (username: string, password: string, userList: Array<User>, activeUser: User) : User => {
    try {
        if (activeUser.isAuth) throw AuthError.AuthError(`You must log out before logging in as a new user`)
        if (!username || !password) throw AuthError.ValidationError(`Login or password can not be empty`)
        if (!userList.some(user => user.username === username && user.password === password)) {
            throw AuthError.ValidationError(`Invalid login or password`)
        }

        return {
            username,
            password,
            isAuth: true
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`${err}`)
    }

    return {
        username: ``,
        password: ``,
        isAuth: false
    }
}
