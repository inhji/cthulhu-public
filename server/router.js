import express from 'express'
import micropub from 'micropub-express'
import jwt from 'express-jwt'
import cookieParser from 'cookie-parser'
import { micropubHandler } from './handlers/micropub'
import { jwtHandler } from './handlers/jwt'
import { publicHandler } from './handlers/public'
import { loginHandler, loggedinHandler } from './handlers/auth'
import { graphqlHandler, graphiqlHandler } from './handlers/graphql'

const router = express.Router()

router.use(cookieParser())
router.use(
  jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
    getToken: jwtHandler
  })
)

router.use(
  '/micropub',
  micropub({
    tokenReference: {
      me: process.env.PUBLIC_URL,
      endpoint: process.env.TOKEN_ENDPOINT
    },
    handler: micropubHandler
  })
)

router.use('/graphql', graphqlHandler)
router.get('/graphiql', graphiqlHandler)
router.post('/login', loginHandler)
router.post('/loggedin', loggedinHandler)
router.get('/', publicHandler)

export default router
