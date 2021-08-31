import express from 'express'
import { getRegionVillage } from '../controllers/regionController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getRegionVillage)

export default router
