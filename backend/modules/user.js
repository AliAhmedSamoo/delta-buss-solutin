const mongoose = require("mongoose");



const Delta = new mongoose.Schema({






    name: {
        type: String,

    },

    email: {
        type: String,

    },
    password: {
        type: String,

    },
    phone: {
        type: String,

    },


    timestamp: { type: Date, default: Date.now }



});


const User = new mongoose.model('User', Delta)
module.exports = User;