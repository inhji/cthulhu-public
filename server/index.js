import next from 'next'
import path from 'path'
import serveStatic from 'serve-static'
import express from 'express'
import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import morgan from 'morgan'
import cors from 'cors'
import apiRouter from './router'
import logger from './logger'
import { connect } from './database'

const port = process.env.PORT
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const attachLogger = (req, res, next) => {
  req.log = logger
  next()
}

// FIXME: This is a workaround for reflecting the current origin
// https://github.com/expressjs/cors/issues/119
const setCorsOrigin = (origin, callback) => callback(null, true)

export const start = async () => {
  // Prepare Next App
  await app.prepare()

  // Connect to database
  await connect()

  const server = express()

  server.use(attachLogger)
  server.use(
    cors({
      credentials: true,
      origin: setCorsOrigin
    })
  )

  server.use(morgan('tiny', { stream: logger.stream }))
  server.use(bodyParser.json())

  server.use(
    '/assets',
    serveStatic(path.join(__dirname, '../assets'), {
      immutable: true,
      maxAge: '7d'
    })
  )

  server.use('/api', apiRouter)

  server.get('/post/:hashid', (req, res) => {
    return app.render(req, res, '/post', { hashid: req.params.hashid })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(
    dev
      ? errorHandler({ log: true })
      : (err, req, res, next) => {
        logger.error(err.stack)
        res.sendStatus(500).send('Something broke horribly!')
      }
  )

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}
