import express from 'express'
import {
  getMvFamilyList2020,
  getMvFamilyList2021
} from '../controllers/mvFamilyListController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2020').get(protect, getMvFamilyList2020)
router.route('/2021').get(protect, getMvFamilyList2021)

export default router
