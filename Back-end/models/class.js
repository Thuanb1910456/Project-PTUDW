const mongoose = require('mongoose');

const classProductsSchema = new mongoose.Schema({
   name: {type:String,require: true, trim: true},
   logo: {type:String, require:true}
}, { timestamps: true })

const classProducts = mongoose.model('classes',classProductsSchema);
module.exports = classProducts;