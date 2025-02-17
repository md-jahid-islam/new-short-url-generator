const express = require('express');
const authRoute = require('./auth');
const ShorturlRoute = require('./shorturl');
const apiRoute = express.Router()

// apiRoute.use("/auth" , (req , res)=>{
//  res.send("auth route")
// })
apiRoute.use("/auth" , authRoute)

apiRoute.use("/generate" , ShorturlRoute)



module.exports = apiRoute;