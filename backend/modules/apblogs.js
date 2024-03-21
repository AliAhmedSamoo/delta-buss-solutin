const mongoose = require("mongoose");



const Delta = new mongoose.Schema({






    category: {
        type: String,

    },

    title: {
        type: String,

    },


    description: {
        type: String,

    },


    authorName: {
        type: String,

    },


    authoremail: {
        type: String,

    },


    cover: {
        type: String,

    },

    authorid: {
        type: String,

    },


   


    timestamp: { type: Date, default: Date.now }



});


const Apblogs = new mongoose.model('Apblogs', Delta)
module.exports = Apblogs;