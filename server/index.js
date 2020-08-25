'use strict';
const express = require('express');
const path = require('path');

// middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const status404 = require('./middleware/status404');
const status500 = require('./middleware/status500');

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors(/* {origin: 'http://localhost:3000'} */));

// body paser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static server
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/api/members', require('./routes/api/members'));

app.use(status404);
app.use(status500);

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`listening at port: ${PORT}`);
});
