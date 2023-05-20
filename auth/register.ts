import {User} from './user.interface'

export const register = (username: string, password: string, credentials: Array<User>, activeUser: User)  => {

    if (username.length <= 5) throw new Error(`Login must be longer than 5 characters`)

    if (password.length <= 6) throw new Error(`Password must be longer than 6 characters`)

    if (activeUser.isAuth) throw new Error(`You must log out before registering`)

    if (credentials.some(user => user.username === username)) {
        throw new Error(`Username: "${username}" is already registered`)
    }

    // eslint-disable-next-line no-param-reassign
    activeUser = {
        username,
        password,
        isAuth: true
    }

    credentials.push(activeUser)
}
