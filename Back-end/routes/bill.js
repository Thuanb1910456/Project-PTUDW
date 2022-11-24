const express = require('express');
const Bill = require('../controllers/bill');
const Router = express.Router();
Router.route('/')
    .get(Bill.getBill)
    .post(Bill.createBill)
Router.route('/:id')
    .put(Bill.updateBill)
    .delete(Bill.deleteBill)
Router.route('/user')
    .get(Bill.getBillOfUser)
module.exports = Router;