import express from 'express'
import authenticate from '../auth/authenticate'
const router = express.Router()

router.post('/login', authenticate)

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})

export default router