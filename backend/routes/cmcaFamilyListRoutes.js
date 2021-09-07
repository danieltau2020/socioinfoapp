import express from 'express'
import {
  getCmcaFamilyList2017,
  getCmcaFamilyList2021
} from '../controllers/cmcaFamilyListController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getCmcaFamilyList2017)
router.route('/2021').get(protect, getCmcaFamilyList2021)

export default router
