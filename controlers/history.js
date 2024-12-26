const mogoose= require("mongoose");
const History = require("../model/order");
const Categories = require("../model/order");

module.exports.getPageHome = async  function(req, res){
    const all = await Categories.find({})
    if(all){
        res.render('history.hbs',{
            cat: all
        }) 
    }
}

  
module.exports.addPagePosition = async function(req,res){
    const history = new History({

        name: req.body.name,
        id_category: req.body.id,
        price: req.body.price
    })
    const result = await history.save()
    if(result){ 
        res.redirect("/history/"+req.body.id_category)
    } 
}