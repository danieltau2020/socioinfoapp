import express from 'express'
import { getCmcaKeyStats } from '../controllers/cmcaStatsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getCmcaKeyStats)

export default router
