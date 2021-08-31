import express from 'express'
import { getMVPersons } from '../controllers/mvPersonController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getMVPersons)
// router.route('/updatevillageid').get(updateVillageObjectId)

export default router
