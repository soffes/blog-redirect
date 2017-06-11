const express = require('express')
const url = require('url');

const server = express()

server.get('*', (req, res) => {
  res.redirect(301, url.format({
    protocol: 'https',
    host: 'soffes.blog',
    pathname: req.path
  }))
})

server.listen(3000, err => {
  if (err) {
    throw err
  }
  console.log('> Ready on http://localhost:3000')
})
