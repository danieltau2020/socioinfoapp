import express from 'express'
import { getMvPersons } from '../controllers/mvPersonController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getMvPersons)

export default router
