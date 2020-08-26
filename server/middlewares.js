function status404(req, res, next) {
	const error = new Error(`${req.originalUrl} not found :(`);
	res.status(404);
	next(error);
}

function status500(error, req, res, next) {
	const status = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(status);
	res.json({
		message: error.message,
		stack: process.env.NODE_ENV === 'production' ? 'no' : error.stack,
	});
}

module.exports = {
	status404,
	status500
};