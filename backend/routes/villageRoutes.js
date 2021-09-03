import express from 'express'
import { getMineVillages } from '../controllers/villageController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/mv').get(protect, getMineVillages)

export default router
