const express = require('express')
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const db = require('./db')
const cors = require('cors')
const port = process.env.PORT || 8000
const {errorHandler} = require('./middlewar/errorMiddlewar')

const userRoute = require('./routes/userRouter')

db();
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(errorHandler)




app.use('/api/users',userRoute)




app.listen(port, ()=>{ 

    console.log(`hello from ${port}`)

})

