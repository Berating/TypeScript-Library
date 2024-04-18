import { AuthChecker } from 'type-graphql'
import { Context } from '../types/context'
import { UserRole } from '../enums/user-role'

export const authChecker: AuthChecker<Context> = (
  {
    context: {
      reader,
    },
  },
  roles: UserRole[]
) => {
  if(!reader?.roles) {
    return false
  }
  return reader.roles.some((role: UserRole) => roles.includes(role))
}



