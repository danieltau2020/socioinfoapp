import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  registerUser,
  loginUser,
  logoutUser
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)

export default router
