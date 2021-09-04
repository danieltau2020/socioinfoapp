import express from 'express'
import {
  getCmcaRegionPopulation2017,
  getCmcaRegionPopulation2021
} from '../controllers/cmcaRegionPopulationController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getCmcaRegionPopulation2017)
router.route('/2021').get(protect, getCmcaRegionPopulation2021)

export default router
