
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('workers',WorkersSchema)