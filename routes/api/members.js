const express = require('express');
const router = express.Router();
const data = require('./data.js');

router.get('/', (req, res) => {
	let id;
	if(data.length >= id) { 
		id = req.query.id;
		res.json(data[parseInt(id) - 1]);
	} else
		res.status(400).json({msg: `member with id=${id} not found`});
});

router.post('/', (req, res) => {
	const {name, status} = req.body;
	const member = {id:data.length+1, name:name, status:status};
	data.push(member);
	console.log(data);
	res.json(data);
});

module.exports = router;