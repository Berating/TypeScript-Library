import { GraphQLError } from 'graphql/error'

export function AppError(message: string, code: string) {
  return new GraphQLError(message, {
    extensions: {
      code,
    },
  })
}