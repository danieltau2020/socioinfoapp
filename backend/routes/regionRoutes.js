import express from 'express'
import {
  getRegionVillage,
  getSmlVillages
} from '../controllers/regionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getRegionVillage)
router.route('/smlvillages').get(protect, getSmlVillages)

export default router
