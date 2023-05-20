import {User} from './user.interface'
export const login = (username: string, password: string, credentials: Array<User>, activeUser: User) => {
    if (activeUser.isAuth) throw new Error(`You must log out before logging in as a new user`)

    if (!credentials.some(user => user.username === username && user.password === password)) {
        return (`Invalid login or password`)
    }

    // eslint-disable-next-line no-param-reassign
    activeUser = {
        username,
        password,
        isAuth: true
    }
}