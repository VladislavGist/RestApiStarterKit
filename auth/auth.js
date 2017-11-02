import passport from 'passport'
import {Strategy} from 'passport-local'
import UserClass from '../classes/user'

const User = new UserClass

// аутентификацияs
passport.use(new Strategy(
	User.findUser
))

// генерирует id на основнии данных о юзере
passport.serializeUser((user, done) => {
	done(null, user)
})

// по id восстанавливает данные о юзере
passport.deserializeUser((id, done) => {
	done(null, {username: id})
})