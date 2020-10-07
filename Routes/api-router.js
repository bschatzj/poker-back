const router = require('express').Router()
const Login = require('./Auth/auth-router')



router.use('/login', Login)



module.exports = router