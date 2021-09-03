import express from 'express'
import { getMvKeyStats } from '../controllers/mvKeyStatsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getMvKeyStats)

export default router
