import {User} from './user.interface'
export const whoami = (activeUser: User) => {
    const {isAuth} = activeUser

    if (!isAuth) throw new Error('User not authorized')

    // eslint-disable-next-line no-console
    console.log(`User ${activeUser.username} is authorized`)
}