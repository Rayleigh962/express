function status404(req, res, next) {
	const error = new Error(`${req.originalUrl} not found :(`);
	res.status(404);
	next(error);
}

module.exports = status404;