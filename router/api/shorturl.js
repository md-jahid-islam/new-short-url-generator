const express = require('express');
const Makeshorturl = require('../../controllers/shorturl/MakeShortUrl');
const ShorturlRoute = express.Router()

ShorturlRoute.get("/Shorturl" , Makeshorturl )

module.exports = ShorturlRoute;