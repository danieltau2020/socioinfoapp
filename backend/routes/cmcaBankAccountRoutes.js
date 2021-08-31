import express from 'express'
import { getCmcaBankAccounts } from '../controllers/cmcaBankAccountController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getCmcaBankAccounts)

export default router
