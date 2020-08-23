const moment = require('./node_modules/moment');
function logger(req, res, next) {
	console.log(`${
		req.method} : ${
		req.protocol}://${
		req.get('host')}${
		req.originalUrl} at ${
		moment().format()}`);

	next();
}
module.exports = logger;