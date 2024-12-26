const express = require("express");
const passport = require('passport')
const urlencodedParser = express.urlencoded({extended: false});
let authControler = require('../controlers/auth')

const authRouter = express.Router();

authRouter.get('/login',authControler.getPageLogin)
authRouter.get('/registration',authControler.getPageRegistration)
authRouter.post('/registration',urlencodedParser,authControler.addUser)
authRouter.post('/login',urlencodedParser,authControler.login)

module.exports = authRouter