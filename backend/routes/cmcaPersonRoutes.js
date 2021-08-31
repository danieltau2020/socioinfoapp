import express from 'express'
import { getCmcaPersons } from '../controllers/cmcaPersonController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getCmcaPersons)
// router.route('/updatevillageid').get(updateVillageObjectId)

export default router
