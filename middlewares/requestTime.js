export default (req, res, next) => {
	req.requestTime = Date.now()
	next()
}