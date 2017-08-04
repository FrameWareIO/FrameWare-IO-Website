'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({

    email: {
        type: String,
        Required: 'Kindly enter the email of the record'
    },

    Created_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Records', TaskSchema);