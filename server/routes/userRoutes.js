const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const userController = require('../controllers/user')


router.post('/auth/register',authController.registerUser)
router.post('/auth/login',authController.login)
router.get('/profile',authController.protect,userController.getMe)

module.exports = router