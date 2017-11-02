import db from '../db'

class User {

	findUser(username, password, done) {
		db.get().collection('users').findOne({name: username, password}, (err, user) => {
			if(err) return done(null, false, {message: 'find user error'})
			return done(null, user)
		})
	}

	findAllUsers(req, res) {
		db.get().collection('users').find().toArray((err, result) => {
			if(err) res.send('userAll find err')
			res.send(result)
		})
	}

	creareUser(req, res) {
		db.get().collection('users').insert({name: req.body.name, password: req.body.password}, err => {
			if(err) res.send('user insert err')
			res.send('user insert success')
		})
	}

	updateUser(req, res) {
		res.send('Update user')
	}

	deleteUser(req, res) {
		res.send('Delete user')
	}

}

export default User