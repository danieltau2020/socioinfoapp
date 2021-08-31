import asynchandler from 'express-async-handler'
import CMCAKeyStats from '../models/cmcaKeyStatsModel.js'

// @desc    Fetch CMCA key stats
// @route   GET /api/cmca/keystats
// @access  Private
const getCmcaKeyStats = asynchandler(async (req, res) => {
  const cmcaKeyStats = await CMCAKeyStats.find({})

  if (cmcaKeyStats) {
    res.status(200).json(cmcaKeyStats)
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

export { getCmcaKeyStats }
