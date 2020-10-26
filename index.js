const express = require('express')
const userRouter = require('./user-router')
const dataRouter = require('./data-router')
const bankRouter = require('./bank-router')
const app = express()
const port = 3000

app.use(express.json())

app.use('/', express.static('www'))
app.use('/lib', express.static('node_modules'))
 
app.use('/users/', userRouter)
app.use('/data', dataRouter)
app.use('/konten', bankRouter)

app.listen(port, () => console.log(`Open http://localhost:${port}`))
