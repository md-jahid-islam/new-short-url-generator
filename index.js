const express = require('express')
const dbconnect = require('./config/DBConnect')
const router = require('./router')
const app = express()
app.use(express.json())
app.use(router)
dbconnect()

 //============== router is functions ==========// 
//  router.get('/', function (req, res) {
//   res.send('Hello World')
//  })


 //=========== listen 8000 ===========//
 app.listen(8000 , ()=>{
 console.log("server is running")
 })
 //  oJkEjvJEeLShRvks