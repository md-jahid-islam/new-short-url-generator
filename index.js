const express = require('express')
const dbconnect = require('./config/DBConnect')
const router = require('./router')
const app = express()
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static(__dirname, + '/public'));
app.use(router)
dbconnect()
 
 //=========== listen 8000 ===========//
 app.listen(8000, ()=> console.log("server is running"))

 //  oJkEjvJEeLShRvks