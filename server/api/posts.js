const { Router } = require('express');
const router = Router();
const Post = require('../../models/post');

router.get('/', (req, res) => {
	res.send('this is a get response');
});

router.post('/', async (req, res, next) => {
	try {
		const post = new Post(req.body);
		const createdPost = await post.save();

		console.log(req.body);

		res.json(createdPost);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
