require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bookRoute = require('./routes/Books')


//creation express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/books',bookRoute)

//connect to DB
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        //listen to req
        app.listen(process.env.PORT, () =>{
            console.log('connected to DB success & listening success on port', process.env.PORT)
        })    
    })
    .catch((err) =>{
        console.log(err)
    })


