import {User} from './user.interface'
import {AuthError} from "./authErrors"

export const logout = (activeUser: User, userList: Array<User>) : User => {
    const {isAuth} = activeUser

    try {
        if (!isAuth) throw AuthError.AuthError('User not authorized')

        const currentUserIndex= userList.findIndex(userItem => userItem.username === activeUser.username)
        // eslint-disable-next-line no-param-reassign
        userList[currentUserIndex].isAuth = false

        return {
            username: ``,
            password: ``,
            isAuth: false,
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`${err}`)
    }

    return {
        username: ``,
        password: ``,
        isAuth: false,
    }
}
