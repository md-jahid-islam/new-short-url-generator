 const mongoose = require('mongoose');
 //============ mongoose connect ===========//
 const dbconnect = ()=>{

     mongoose.connect('mongodb+srv://ShortUrlwithNode:oJkEjvJEeLShRvks@cluster0.sjrdz.mongodb.net/ShortUrl?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log(' DB Connected!'));
 }
 module.exports = dbconnect;