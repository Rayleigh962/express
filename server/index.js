'use strict';
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// get routes
const posts = require('./api/posts');

// get middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const middlewares = require('./middlewares');

// initialize server
const app = express();

// make database connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// use middlewares
app.use(helmet());
app.use(morgan('common'));
app.use(cors(/*{origin: process.env.CORS_ORIGIN}*/));
// body paser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//-------------------------------------------------------
// REQUESTS FORM CLIENT START FROM HERE

// set static server
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/posts', posts);

app.use(middlewares.status404);
app.use(middlewares.status500);

//------------------------------------------------------

// launch server
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`listening at port: ${PORT}`);
});
