require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('./models/db')

const aiRoutes = require('./routes/ai.routes')
const authRoutes = require('./routes/auth.routes')


app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!!!');
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/ai', aiRoutes)
app.use('/auth', authRoutes)

module.exports = app;