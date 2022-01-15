const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors('*'))
app.use(express.json())
const movie = require('./routes/movie')

app.use('/movie',movie)

app.listen(4000,'0.0.0.0',()=>{
    console.log('Server listening on port 4000')
})