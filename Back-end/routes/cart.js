const express = require('express');
const Cart = require('../controllers/cart');
const Router = express.Router();
Router.route('/')
    .get(Cart.getAllCart)
    .post(Cart.createCart)
Router.route('/:id')
    .put(Cart.updateCart)
    .delete(Cart.deleteCart)
Router.route('/user')
    .get(Cart.getCartOfUser)
module.exports = Router;