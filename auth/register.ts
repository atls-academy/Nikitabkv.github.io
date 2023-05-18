import {IUser} from './user'

export const register = (username: string, password: string, credentials: Array<IUser>, currentUserData: IUser) => {

    if (username.length <= 5) throw new Error(`Login must be longer than 5 characters`)

    if (password.length <= 6) throw new Error(`Password must be longer than 6 characters`)

    if (currentUserData.isAuth) throw new Error(`You must log out before registering`)

    if (credentials.find(user => user.username === username)) {
        throw new Error(`Username is already registered`)
    }

    // eslint-disable-next-line no-param-reassign
    currentUserData = {
        username,
        password,
        isAuth: true
    }

    credentials.push(currentUserData)

    return `You have registered a new user: "${username}"`
}
