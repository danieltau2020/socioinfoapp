import express from 'express'
import {
  getCmcaBankTypes2017,
  getCmcaBankTypes2021
} from '../controllers/cmcaBankTypesController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getCmcaBankTypes2017)
router.route('/2021').get(protect, getCmcaBankTypes2021)

export default router
