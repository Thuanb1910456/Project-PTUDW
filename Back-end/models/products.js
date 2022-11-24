const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: true},
    price:{type:Number, required:true},
    image:{type:String, trim: true, required:true},
    describe:{type:String,trim:true},
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'classes'
    }
}, { timestamps: true })

const Products = mongoose.model('products',productsSchema);
module.exports = Products;