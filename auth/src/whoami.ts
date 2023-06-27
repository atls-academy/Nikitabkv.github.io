import { AuthError } from './auth-errors'
import { User }      from './user.interface'

export const whoami = (activeUser: User) => {
  const { isAuth } = activeUser
  if (!isAuth) throw AuthError.AuthError('User not authorized')
  return activeUser
}
