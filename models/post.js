const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
	title: {type: String, required: true},
	author: {type: String, required: true},
	body: String,
}, {
	timestamps: true,
});

const post = mongoose.model('post', postSchema);

module.exports = post;