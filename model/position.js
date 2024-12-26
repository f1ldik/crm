const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    position_name:{
        type: String
    },
    id_category:{
        type: String
    },
    price:{
        type: String
    }
})

module.exports = mongoose.model('position',positionSchema)