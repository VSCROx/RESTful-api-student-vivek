const mongoose = require("mongoose");

userSchema = mongoose.Schema({
    username: String,
    password: String,
    phone: Number,
    email: String,
    userType: String
})

module.exports = mongoose.model('user', userSchema);