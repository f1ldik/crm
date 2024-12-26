const express = require("express");
const hbs = require("hbs");
const cookieParser = require('cookie-parser');
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")
let objectId = require('mongodb').ObjectId;
const passport = require('passport')
let authRouter=require('./routs/auth')
let homeRouter=require('./routs/home')
let categoryRouter=require('./routs/category')
let urldb=require('./db/config');
const assortyRouter = require("./routs/assorty");
const orderRouter = require("./routs/order");
const historyRouter = require("./routs/history");
const app = express();

mongoose.connect(urldb.mongourl)
    .then(()=>console.log('db server start'))
    .catch((err)=>console.log('error db ',err))
  
app.set("view engine", "hbs");
app.use(express.static(__dirname+"/publick"));
app.use(express.json()); 
app.use(cookieParser())
app.use(passport.initialize())
require('./middleware/passport')(passport)

// (async () => {
//     try {
//        await mongoClient.connect();
//        app.locals.collection = mongoClient.db("usersdb").collection("users");
       
//        console.log("Сервер ожидает подключения...");
//    }catch(err) {
//        return console.log(err);
//    } 
// })();

app.use('/api/auth',authRouter)
app.use('/home',homeRouter)
app.use('/category', categoryRouter)
app.use('/assorty', assortyRouter)
app.use('/order', orderRouter)
app.use("/history", historyRouter) 

app.get('/',function(req,res){
    res.redirect('api/auth/login')
})

// app.get('/home',function(req,res){
//     res.redirect('api/auth/home')
// })

app.listen(3000,function(){
    console.log('server start')
});