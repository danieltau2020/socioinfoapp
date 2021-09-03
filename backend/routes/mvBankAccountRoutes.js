import express from 'express'
import { getMvBankAccounts } from '../controllers/mvBankAccountController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getMvBankAccounts)

export default router
