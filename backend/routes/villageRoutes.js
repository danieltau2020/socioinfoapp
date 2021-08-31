import express from 'express'
import { updateRegionObjectId } from '../controllers/villageController.js'

const router = express.Router({ mergeParams: true })

// router.route('/').get(updateRegionObjectId)

export default router
