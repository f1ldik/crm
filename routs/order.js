const express = require("express");
let orderControler = require('../controlers/order')
const passport = require('passport')
const urlencodedParser = express.urlencoded({extended: false});
const orderRouter = express.Router();

orderRouter.get('/',urlencodedParser, passport.authenticate("jwt", {session: false}) ,orderControler.getPageHome)

// assortyRouter.get('/product/',assortyControler.getPageProduct)
orderRouter.post('/',urlencodedParser,orderControler.addPagePosition)
orderRouter.post("/add", urlencodedParser, orderControler.addOrder)
orderRouter.get('/:id',urlencodedParser,orderControler.Position)

module.exports = orderRouter