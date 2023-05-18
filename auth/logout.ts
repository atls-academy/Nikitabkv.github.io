import {IUser} from './user.interface'

export const logout = (currentUserData: IUser) => {
    const {isAuth, username} = currentUserData

    if (!isAuth) throw new Error('User not authorized')

    // eslint-disable-next-line no-param-reassign
    currentUserData = {}

    return `You have logged out of your account: ${username}`
}
