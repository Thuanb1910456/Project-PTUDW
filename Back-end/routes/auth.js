const express = require('express');
const { login, register } = require('../controllers/auth');
const Router = express.Router();
Router.route('/register').post(register);
Router.route('/login').post(login);
module.exports = Router;