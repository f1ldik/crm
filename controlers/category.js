const mogoose= require("mongoose");
const Category = require("../model/usercategory");

module.exports.getPageHome = async  function(req, res){
    const all = await Category.find({})
    if(all){
        res.render('catregory.hbs',{
            cat: all
        }) 
    }
}
module.exports.getPageCategory = async function(req,res){
    const category = new Category({
        nameCategory: req.body.category
    })
    const result = await category.save()
    if(result){ 
        res.redirect("/category")
    } 
}
module.exports.DeleteCategory = async function(req, res){
    const id = req.params.id
    const del = await Category.findByIdAndDelete(id)
    if(del){
        res.redirect('/category')
    }
}