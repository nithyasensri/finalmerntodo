

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const EmployeeRouter = require('./router/Employeerouter')
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser.json());

// middleware(very important)

app.use(express.json())
// app.use(express.static('public'));
app.use('/', express.static('dist'))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })


  app.get('/',(req,res)=>{
      res.json("'Hello, this is the root route!'")
  })

app.use('/workers',EmployeeRouter)


// -------------

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("succ",process.env.PORT)
    })
})
.catch((error)=>{
console.log(error)
})




