import express from 'express'
import {
  getMvBankTypes2017,
  getMvBankTypes2021
} from '../controllers/mvBankTypesController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2017').get(protect, getMvBankTypes2017)
router.route('/2021').get(protect, getMvBankTypes2021)

export default router
