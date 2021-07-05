const express = require('express'); /// import express

const app = express(); /// executing express app

const bodyParser = require('body-parser');

const User =require('./models/user') // mongoose model import
app.use((req,res,next)=>{ //// to remove CORS error
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST,PUT,PATCH,DELETE,OPTIONS")
   next();
});
const Router = require('./routes/route')
app.use(bodyParser.json()); ///important to receive json in post request in json
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user',Router)

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/attendance",{ useNewUrlParser: true }).then((res)=>{
  console.log('connected');
},(err)=>{
  console.log('connection failed');
})

// app.use((req,res,next)=>{ ///middleware
//  console.log('First MiddleWare');
//  next();
// });
app.listen(9000,()=>{
  console.log('server started')
})

module.exports = app ; // to export the express app
