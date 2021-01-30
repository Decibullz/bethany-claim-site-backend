const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  image: String,
  description: String,
  
}, {
  timestamps: true
});



module.exports = mongoose.model('Item', itemSchema);