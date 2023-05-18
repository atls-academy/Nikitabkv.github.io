import {IUser} from './user.interface'
export const whoami = (currentUserData: IUser) => {
    const {isAuth} = currentUserData

    if (!isAuth) throw new Error('User not authorized')

    // eslint-disable-next-line no-console
    console.log(`User ${currentUserData.username} is authorized`)
}