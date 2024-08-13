const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const userController = require('../controllers/user')


router.post('/auth/register',authController.registerUser)
router.post('/auth/login',authController.login)

router.use(authController.protect)
router.get('/profile',userController.getMe)
router.patch('/profile/address',userController.updateAddress)
router.patch('/profile',userController.updateProfile)
router.delete('/profile/address',userController.deleteAddress)

module.exports = router