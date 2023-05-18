import {IUser} from './user'

const userData : IUser = {
    username: `HappyHappy`,
    password: `123456`,
    isAuth: true
}

const whoami = (currentUserData: IUser) => {
    const {isAuth} = currentUserData

    if (!isAuth) throw new Error('User not authorized')

    // eslint-disable-next-line no-console
    console.log(`User ${currentUserData.username} is authorized`)
}

whoami(userData);
