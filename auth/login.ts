import {IUser} from './user'
export const login = (username: string, password: string, credentials: Array<IUser>, currentUserData: IUser) => {
    if (currentUserData.isAuth) throw new Error(`You must log out before logging in as a new user`)

    if (!credentials.some(user => user.username === username && user.password === password)) {
        return (`Invalid login or password`)
    }

    // eslint-disable-next-line no-param-reassign
    currentUserData = {
        username,
        password,
        isAuth: true
    }

    return `You are logged in as: "${username}"`
}