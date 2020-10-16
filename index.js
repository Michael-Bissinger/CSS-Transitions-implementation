const express = require('express')
const userRouter = require('./user-router')
const dataRouter = require('./data-router')
const transitionRouter = require('./transition-router') /* bankRouter = transitionRouter */
const app = express()
const port = 3000

app.use(express.json())

app.use('/', express.static('www'))
app.use('/lib', express.static('node_modules'))

app.use('/users/', userRouter)
app.use('/data', transitionRouter)
app.use('/transitions', transitionRouter) /* konten = transitions */

app.listen(port, () => console.log(`Open http://localhost:${port}`))
