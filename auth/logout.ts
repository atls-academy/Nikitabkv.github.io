import {User} from './user.interface'
import {AuthError} from "./auth-errors"

export const logout = (activeUser: User, userList: Array<User>) : User => {
    const {isAuth, username, password} = activeUser

    if (!isAuth) throw AuthError.AuthError('User not authorized')
    const currentUserIndex= userList.findIndex(userItem => userItem.username === activeUser.username && userItem.password === activeUser.password)
    if (currentUserIndex === -1) throw AuthError.ValidationError('User not found')

    // eslint-disable-next-line no-param-reassign
    userList[currentUserIndex].isAuth = false

    return {
        username,
        password,
        isAuth: false,
    }
}
