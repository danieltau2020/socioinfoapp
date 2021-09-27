import express from 'express'
import { getSmlLeasePayments2021 } from '../controllers/smlLeasePaymentsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/2021').get(protect, getSmlLeasePayments2021)

export default router
