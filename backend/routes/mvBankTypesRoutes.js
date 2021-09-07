import express from 'express'
import {
  getMvBankTypes2020,
  getMvBankTypes2021
} from '../controllers/mvBankTypesController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2020').get(protect, getMvBankTypes2020)
router.route('/2021').get(protect, getMvBankTypes2021)

export default router
