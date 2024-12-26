const express = require("express");
let assortyControler = require('../controlers/assorty')
const passport = require('passport')
const urlencodedParser = express.urlencoded({extended: false});
const assortyRouter = express.Router();

assortyRouter.get('/',urlencodedParser, passport.authenticate("jwt", {session: false}) ,assortyControler.getPageHome)
// assortyRouter.get('/product/',assortyControler.getPageProduct)
assortyRouter.post('/',urlencodedParser,assortyControler.addPagePosition)
assortyRouter.get('/:id',urlencodedParser,assortyControler.Position)
assortyRouter.get('/delete/:id',urlencodedParser,assortyControler.DeleteOrder)

module.exports = assortyRouter