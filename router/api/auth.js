const express = require('express')
const authRoute = express.Router()

authRoute.post("Registrations" ,(req , res)=>{
    res.send("Registrations router")
})
authRoute.post("Login" ,(req , res)=>{
    res.send("Login router")
})

module.exports = authRoute;