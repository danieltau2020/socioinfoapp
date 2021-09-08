import express from 'express'
import { getCmcaPaymentsCashAllocation2021 } from '../controllers/cmcaPaymentsCashAllocationController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2021').get(protect, getCmcaPaymentsCashAllocation2021)

export default router
