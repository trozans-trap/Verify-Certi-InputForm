const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const UserSchema = new Schema({
    name:{
        type: String,
        required: true

    },
    email: {
        type: String,
        // required: true
    },
    mobile: {
        type: Number,
    },
    certino:{
        type: String
    }
});

const User = mongoose.model('user',UserSchema);
module.exports = User;