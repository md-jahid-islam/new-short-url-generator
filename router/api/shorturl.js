const express = require('express');
const Makeshorturl = require('../../controllers/shorturl/MakeShortUrl');
const ShorturlRoute = express.Router()

ShorturlRoute.post("/Shorturl" , Makeshorturl )

module.exports = ShorturlRoute;