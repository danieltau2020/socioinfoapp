import express from 'express'
import {
  getMvFamilyList2017,
  getMvFamilyList2021
} from '../controllers/mvFamilyListController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getMvFamilyList2017)
router.route('/2021').get(protect, getMvFamilyList2021)

export default router
