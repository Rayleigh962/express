const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./logger.js');
const app = express();
const PORT = process.env.PORT || 5000;

const data = require('./data.js');

app.use(cors());
app.use(logger);
//set static
// app.use(express.static(path.join(__dirname, 'public')));

// gets all member
app.get('/api/members', (req, res) => {
	const { id } = req.query;
	res.send(data[id - 1]);
});

app.listen(PORT, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`listening at port: ${PORT}`);
});
