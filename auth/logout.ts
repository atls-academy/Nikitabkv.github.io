import {User} from './user.interface'

export const logout = (activeUser: User) => {
    const {isAuth} = activeUser

    if (!isAuth) throw new Error('User not authorized')

    // eslint-disable-next-line no-param-reassign
    activeUser = {}
}
