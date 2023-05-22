import {User} from './user.interface'
import {AuthError} from "./authErrors"

export const whoami = (activeUser: User) => {
    try {
        const {isAuth} = activeUser
        if (!isAuth) throw AuthError.AuthError('User not authorized')
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`${err}`)
    }
}
