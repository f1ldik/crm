const express = require("express");
let historyControler = require('../controlers/history')
const passport = require('passport')
const urlencodedParser = express.urlencoded({extended: false});
const historyRouter = express.Router();

historyRouter.get('/',urlencodedParser, passport.authenticate("jwt", {session: false}) ,historyControler.getPageHome)
// assortyRouter.get('/product/',assortyControler.getPageProduct)
historyRouter.post('/',urlencodedParser,historyControler.addPagePosition)

module.exports = historyRouter