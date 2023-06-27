import * as bcrypt   from 'bcryptjs'

import { AuthError } from './auth-errors'
import { User }      from './user.interface'

export const login = (
  username: string,
  password: string,
  userList: Array<User>,
  activeUser: User
): string => {
  if (activeUser === null || activeUser === undefined)
    throw AuthError.ValidationError(`ActiveUser is: ${typeof activeUser}}`)
  if (activeUser && activeUser.isAuth)
    throw AuthError.AuthError(`You must log out before logging in as a new user`)
  if (!username || !password) throw AuthError.ValidationError(`Login or password can not be empty`)

  const currentUserIndex = userList.findIndex(
    (user) => user.username === username && bcrypt.compareSync(password, user.password)
  )
  if (currentUserIndex === -1) throw AuthError.ValidationError('Invalid login or password')

  // eslint-disable-next-line no-param-reassign
  userList[currentUserIndex].isAuth = true
  return userList[currentUserIndex].username
}
