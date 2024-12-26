const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    email:{
        type: String,
    },
    pass:{
        type: String,

    }
    
});

module.exports = mongoose.model('users',userScheme)