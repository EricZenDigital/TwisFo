'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    handleSearch: String,
    keywords: [{type: String}]
});

mongoose.model('Twitfo', schema);
