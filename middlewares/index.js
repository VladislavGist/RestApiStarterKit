import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import passport from 'passport'
import logger from './logger'
import requestTime from './requestTime'

import congif from '../configs/config'

export default [
	express.static(path.join(__dirname, '../public')),
	cookieParser(),
	bodyParser.urlencoded({extended: true}),
	bodyParser.json(),
	cookieSession({keys: [congif.secret]}),
	passport.initialize(),
	passport.session(),
	requestTime,
	logger
]