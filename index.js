const express = require('express')
const userRouter = require('./user-router') /* brauch ich das überhaupt? mal rausschmeißen wenn alles funktioniert */
const dataRouter = require('./data-router') /* brauch ich das überhaupt? mal rausschmeißen wenn alles funktioniert */
const transitionRouter = require('./transition-router') /* bankRouter = transitionRouter */
const app = express()
const port = 3000

app.use(express.json())

app.use('/', express.static('www'))
app.use('/lib', express.static('node_modules'))

app.use('/users/', userRouter) /* brauch ich das überhaupt? mal rausschmeißen wenn alles funktioniert */
app.use('/data', dataRouter) /* brauch ich das überhaupt? mal rausschmeißen wenn alles funktioniert */
app.use('/transitions', transitionRouter) /* konten = transitions */

app.listen(port, () => console.log(`Open http://localhost:${port}`))
