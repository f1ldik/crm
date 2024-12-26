const express = require("express");
const passport = require('passport')
let categoryControler = require('../controlers/category')
const urlencodedParser = express.urlencoded({extended: false});
const categoryRouter = express.Router();

categoryRouter.get('/',urlencodedParser, passport.authenticate("jwt", {session: false}) ,categoryControler.getPageHome)
categoryRouter.post('/',urlencodedParser,categoryControler.getPageCategory)
categoryRouter.get("/delete/:id", categoryControler.DeleteCategory)

module.exports = categoryRouter