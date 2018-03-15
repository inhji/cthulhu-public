import User from './model'
import { authenticationRequiredResolver } from '../resolvers'

export const user = authenticationRequiredResolver.createResolver(async (_, params, { user }) => {
  return User.findById(user._id)
})

export const users = authenticationRequiredResolver.createResolver(async (_, params, context) => {
  return User.find()
})
