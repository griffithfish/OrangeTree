const { response } = require('express')
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})