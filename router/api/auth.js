const express = require('express')
const Registrations = require('../../controllers/auth/Registrations')
const LoginUser = require('../../controllers/auth/Login')
const authRoute = express.Router()

authRoute.post("/Registrations" , Registrations )
authRoute.post("/Login" , LoginUser )

module.exports = authRoute;