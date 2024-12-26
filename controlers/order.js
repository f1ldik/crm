const mogoose= require("mongoose");
const Position = require("../model/position");
const Categories = require("../model/usercategory");
const Order = require("../model/order");

module.exports.getPageHome = async  function(req, res){
    const all = await Categories.find({})
    if(all){
        res.render('order.hbs',{
            cat: all
        }) 
    }
}
module.exports.Position = async  function(req, res){
    // console.log(req.params.id)
    let id = req.params.id
    const positions = await Position.find({id_category:id})
    if(positions){
        res.render("addorder.hbs", {
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
        res.redirect("/order/"+req.body.id_category)
    } 
}
module.exports.addOrder = async function(req, res) {
    const addorder = new Order({

        name: req.body.order,
        price: req.body.sum
    })
    const result = await addorder.save()
    if(result){ 
        res.json({message: true})
    }
}
