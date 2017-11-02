const mustBeAuth = (req, res, next) => {
	req.isAuthenticated() ? next() : res.redirect('/')
}

export default mustBeAuth