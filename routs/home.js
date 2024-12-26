const express = require("express");
let homeControler = require('../controlers/home')
const passport = require('passport')
const urlencodedParser = express.urlencoded({extended: false});
const homeRouter = express.Router();

homeRouter.get('/',urlencodedParser, passport.authenticate("jwt", {session: false}) ,homeControler.getPageHome)

module.exports = homeRouter