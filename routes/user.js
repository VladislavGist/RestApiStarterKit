import express from 'express'
import UserClass from '../classes/user'
import mustBeAuth from '../auth/mustBeAuth'
const router = express.Router()

const User = new UserClass

router.post('/createUser/', User.creareUser)

router.all('/user/*', mustBeAuth)

router.get('/user/all', mustBeAuth, User.findAllUsers)

// router.put('/user/:userId', User.updateUser)
//
// router.delete('/user/:userId', User.deleteUser)

export default router