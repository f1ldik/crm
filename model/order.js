const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = new Schema({
    name:{
        type: String
    },
    price:{
        type: String
    }
})

module.exports = mongoose.model('order',order)