'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());

// body paser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static server
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/api/members', require('./routes/api/members'));


app.use((req, res, next) => {
	const error = new Error(`${req.originalUrl} not found :(`);
	res.status(404);
	next(error);
});

app.use((error, req, res, next) => {
	const status = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(status);
	res.json({
		message: error.message,
		stack: process.env.NODE_ENV === 'production' ? 'no' : error.stack,
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`listening at port: ${PORT}`);
});
