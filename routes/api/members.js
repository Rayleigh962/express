const express = require('express');
const router = express.Router();
const data = require('./data.js');

router.get('/', (req, res) => {
	const { id } = req.query;

	if(data.length >= id) 
		res.json(data[parseInt(id) - 1]);
	else
		res.status(400).json({msg: `member with id=${id} not found`});
});

module.exports = router;