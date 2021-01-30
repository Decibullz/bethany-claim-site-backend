const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lostItemSchema = new Schema({
    name:string,
    image:string,
    description:string,
    identifier:{type: Integer, unique: true}
},{
    timestamps:true
})

module.exports = mongoose.model('LostItem', lostItemSchema)