import express from 'express'
import { getMVBankAccounts } from '../controllers/mvBankAccountController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getMVBankAccounts)

export default router
