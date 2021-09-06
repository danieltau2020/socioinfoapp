import express from 'express'
import { getCmcaPayments2021 } from '../controllers/cmcaPaymentsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getCmcaPayments2021)

export default router
