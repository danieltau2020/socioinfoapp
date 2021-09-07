import express from 'express'
import { getCmcaPayments2021 } from '../controllers/cmcaPaymentsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2021').get(protect, getCmcaPayments2021)

export default router
