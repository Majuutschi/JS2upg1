const router = require('express').Router();
const cartModel = require('../models/products/cartModel');

// router.get('/', cartModel.getAllCarts);
// router.get('/:id', cartModel.getACart);

router.post('/new', cartModel.saveCart);

// router.patch('/:id', cartModel.updateCart);

// router.delete('/:id', cartModel.deleteCart);


module.exports = router;