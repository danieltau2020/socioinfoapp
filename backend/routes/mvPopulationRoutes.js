import express from 'express'
import {
  getMvPopulation2017,
  getMvPopulation2021
} from '../controllers/mvPopulationController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getMvPopulation2017)
router.route('/2021').get(protect, getMvPopulation2021)

export default router
