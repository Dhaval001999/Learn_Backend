require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => { // req = "request"  res = "response"
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('dhavaldotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur backend </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Tea </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})