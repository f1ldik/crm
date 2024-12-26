const mogoose= require("mongoose");
const Position = require("../model/position");
const Categories = require("../model/usercategory");
let CANPosition = 123
module.exports.getPageHome = async  function(req, res){
    const all = await Categories.find({})
    if(all){
        res.render('assorty.hbs',{
            cat: all
        }) 
    }
}
module.exports.Position = async  function(req, res){
    // console.log(req.params.id)
    let id = req.params.id
    CANPosition = id
    const positions = await Position.find({id_category:id})
    if(positions){
        res.render("product.hbs", {
        id: req.params.id, 
        result: positions
    })
}
    }
  
module.exports.addPagePosition = async function(req,res){
    const assorty = new Position({

        position_name: req.body.product,
        id_category: req.body.id_category,
        price: req.body.price
    })
    const result = await assorty.save()
    if(result){ 
        res.redirect("/assorty/"+req.body.id_category)
    } 
}
module.exports.DeleteOrder = async function(req, res){
    const id = req.params.id
    const del = await Position.findByIdAndDelete(id)
    if(del){
        res.redirect('/assorty/'+CANPosition)
    }
}