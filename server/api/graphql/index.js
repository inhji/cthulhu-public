import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLDateTime } from 'graphql-iso-date'

import * as habitMutations from '../habit/mutations'
import * as userMutations from '../user/mutations'
import * as postMutations from '../post/mutations'

import * as habitQueries from '../habit/queries'
import * as userQueries from '../user/queries'
import * as trackQueries from '../track/queries'
import * as postQueries from '../post/queries'
import * as blogPostQueries from '../blogPost/queries'
import * as gameQueries from '../game/queries'

import userTypes from '../user/types'
import habitTypes from '../habit/types'
import trackTypes from '../track/types'
import postTypes from '../post/types'
import blogPostTypes from '../blogPost/types'
import gameTypes from '../game/types'

const typeDefs = /* GraphQL */ `
  scalar DateTime

  type Query {
    habits: [Habit]
    habit(id: ID!): Habit
    users: [User]
    user: User
    tracks: [Track]
    posts: [Post]
    post(id: ID!): Post
    postByHashid(hashid: ID!): Post
    blogPosts: [BlogPost]
    games: [Game]
  }

  type Mutation  {
    noop: ID
  }
`

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    ...trackQueries,
    ...habitQueries,
    ...userQueries,
    ...postQueries,
    ...blogPostQueries,
    ...gameQueries
  },
  Post: {
    __resolveType (obj, context, info) {
      return obj.type
    }
  },
  Mutation: {
    ...habitMutations,
    ...userMutations,
    ...postMutations,
    // noop works as placeholder because type Mutation cannot be empty.
    // this way we can extend Mutation from other models.
    noop: () => null
  }
}

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, userTypes, habitTypes, trackTypes, postTypes, blogPostTypes, gameTypes],
  resolvers
})
