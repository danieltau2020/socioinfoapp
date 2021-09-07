import express from 'express'
import {
  getMvPopulation2020,
  getMvPopulation2021
} from '../controllers/mvPopulationController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2020').get(protect, getMvPopulation2020)
router.route('/2021').get(protect, getMvPopulation2021)

export default router
