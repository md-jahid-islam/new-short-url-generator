const express = require('express')
const Registrations = require('../../controllers/auth/Registrations')
const LoginUser = require('../../controllers/auth/Login')
const authRoute = express.Router()

authRoute.get("/Registrations" , Registrations )
authRoute.get("/Login" , LoginUser )

module.exports = authRoute;