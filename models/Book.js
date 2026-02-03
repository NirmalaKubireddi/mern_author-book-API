const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
author: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Author',
required: true
},
title: { type: String, required: true },
description: String,
publishedYear: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);