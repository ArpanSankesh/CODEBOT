require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

const aiRoutes = require('./routes/ai.routes')


app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!!!');
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/ai', aiRoutes)

module.exports = app;