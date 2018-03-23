const express = require('express')
const next = require('next')
const path = require('path')
const serveStatic = require('serve-static')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(
    '/assets',
    serveStatic(path.join(__dirname, 'assets'), {
      immutable: true,
      maxAge: '7d'
    })
  )

  server.get('/post/:hashid', (req, res) => {
    return app.render(req, res, '/post', { hashid: req.params.hashid })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
