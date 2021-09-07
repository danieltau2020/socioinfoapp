import asynchandler from 'express-async-handler'
import MvKeyStats from '../models/mvKeyStatsModel.js'

// @desc    Fetch Mine Villages key stats
// @route   GET /api/mv/keystats
// @access  Private
const getMvKeyStats = asynchandler(async (req, res) => {
  const mvKeyStats = await MvKeyStats.find({})

  if (!mvKeyStats) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvKeyStats)
})

export { getMvKeyStats }
