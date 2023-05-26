import {User} from './user.interface'
import {AuthError} from "./auth-errors"

export const logout = (activeUser: User, userList: Array<User>) : string => {
    const {isAuth} = activeUser

    if (activeUser === null || activeUser === undefined) throw AuthError.ValidationError(`Active user is: ${typeof activeUser}}`)
    if (!isAuth) throw AuthError.AuthError('User not authorized')

    const currentUserIndex= userList.findIndex(userItem => userItem.username === activeUser.username)
    if (currentUserIndex === -1) throw AuthError.ValidationError('User not found')

    // eslint-disable-next-line no-param-reassign
    userList[currentUserIndex].isAuth = false
    return userList[currentUserIndex].username
}
