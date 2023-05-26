import {User} from './user.interface'
import {AuthError} from "./auth-errors"

export const whoami = (activeUser: User) => {
    const {isAuth} = activeUser
    if (!isAuth) throw AuthError.AuthError('User not authorized')
    return activeUser
}
