function status500(error, req, res, next) {
	const status = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(status);
	res.json({
		message: error.message,
		stack: process.env.NODE_ENV === 'production' ? 'no' : error.stack,
	});
}
module.exports = status500;
