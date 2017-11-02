import express from 'express'
const router = express.Router()

router.get('/article/:idArticle', (req, res) => {
	res.send(req.params.idArticle)
})

router.post('/article', (req, res) => {
	res.send('add article')
})

router.put('/article/:idArticle', (req, res) => {
	res.send(`put article ${req.params.idArticle}`)
})

router.delete('/article/:idArticle', (req, res) => {
	res.send(`delete ${req.params.idArticle}`)
})

export default router
