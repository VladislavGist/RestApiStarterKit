import passport from 'passport'

const auth = passport.authenticate(
	'local', {
		successRedirect: '/api/success',
		failureRedirect: '/api/failure'
	}
)

export default auth