const mogoose= require("mongoose");
const jwt = require("jsonwebtoken")
const UserModel = require('../model/user');
const user = require("../model/user");
const configKey = require('../db/config')

module.exports.getPageLogin=function(req,res){
    res.render('login.hbs')
}

module.exports.getPageRegistration=function(req,res){
    res.render('register.hbs')
}

module.exports.getPageHome = function(req,res){
    res.render('home.hbs')
}

module.exports.addUser=async function(req,res){
// { email: 'asasdada', pass: 'awdadwad' }
    const cadidate = new UserModel({
        email:req.body.email,
        pass:req.body.pass
    })

    let resolf =await cadidate.save()
    if(resolf){
        res.render('register.hbs',{
            message:'зарегистрирован'
        })
    }
}

module.exports.login = async function(req, res){
    let candidate = await UserModel.findOne({email:req.body.email, pass:req.body.pass})
    if(candidate){
        const token=jwt.sign({
            email:candidate.email,
            userId:candidate._id
        }, configKey.jwt,{expiresIn:60*10})
        res.cookie('Authorization', token);
        res.redirect('/home')
    }
    else{
        res.render("login.hbs", {message: "Неверный логин или пароль"})
    }
}

