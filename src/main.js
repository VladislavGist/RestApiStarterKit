import express from 'express'
import middlewares from '../middlewares/index'
import routes from '../routes/index'
import db from '../db'
import config from '../configs/config'

const app = express()

require('../auth/auth')

app.use(middlewares)
app.use('/api', routes)

db.connect(`mongodb://${config.db.host}/${config.db.base}`, err => {
	if(err) console.log('connections err', err)
	const port = 3000
	app.listen(port, () => console.log('Server start', port))
})