import asynchandler from 'express-async-handler'
import CmcaKeyStats from '../models/cmcaKeyStatsModel.js'

// @desc    Fetch CMCA key stats
// @route   GET /api/cmca/keystats
// @access  Private
const getCmcaKeyStats = asynchandler(async (req, res) => {
  const cmcaKeyStats = await CmcaKeyStats.find({})

  if (!cmcaKeyStats) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaKeyStats)
})

export { getCmcaKeyStats }
