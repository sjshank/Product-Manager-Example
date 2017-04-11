var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var ProductSchema = new Schema({
    id : {
        type: Number,
        unique: true
    },
    pName : {
        type: String,
        required: [true, 'Product name is required']
    },
    pWeight : {
        type: String,
        required: [true, 'Product weight is required']
    },
    pQuantity : {
        type: String,
        required: [true, 'Product quantity is required']
    },
    pColor : {
        type: String,
        required: [true, 'Product color is required']
    }
});

ProductSchema.plugin(autoIncrement.plugin, {
    model: 'Product',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var product = mongoose.model('Product', ProductSchema);

module.exports = product;