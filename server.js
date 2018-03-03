const express = require('express')
const next = require('next')
const path = require('path')
const serveStatic = require('serve-static')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const postHandler = (req, res) => {
  console.log('postHandler for', req.url)
  return app.render(req, res, '/post', { hashid: req.params.hashid })
}

app.prepare().then(() => {
  const server = express()

  server.use('/assets', serveStatic(path.join(__dirname, 'assets')))
  server.get('/note/:hashid', postHandler)
  server.get('/bookmark/:hashid', postHandler)
  server.get('/article/:hashid', postHandler)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
