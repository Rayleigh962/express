const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./middleware/logger.js');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger);

//set static
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`listening at port: ${PORT}`);
});
