const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true},
    email: { type: String, required: true,unique: true},
    password: { type: String, minlength: 8, required: true},
}, { timestamps: true }, { collection: 'user' })

const User = mongoose.model('user', userSchema);

module.exports = User;