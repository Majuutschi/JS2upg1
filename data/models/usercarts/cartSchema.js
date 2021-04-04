const { request } = require('express');

const mongodb = require('mongoose');

const cartSchema = mongodb.Schema({
    // user: { type: mongodb.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true, unique: true },
    // items: [itemSchema],
    // cartTotal: { default: 0, type: Number },

    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
})


// let cartSchema = new Schema({
//     user:   { type: Schema.Types.ObjectId, ref: 'User'},
//     cart:   { type: Object, required: true },
//     name:   { type: String, required: true }
// })

// let itemSchema = new Schema ({

    // productId: { type: mongodb.Schema.Types.ObjectId, ref: 'Product' },
//     name: { type: String, required: true },
//     quantity: { type: Number, required:true },
//     price: { type: Number, required: true },
//     total: { type: Number, required: true },
//     image: { type: String, required: true } 
// })





module.exports = mongodb.model('Cart', cartSchema);