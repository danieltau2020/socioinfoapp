import asynchandler from 'express-async-handler'
import MvPopulation2017 from '../models/mvPopulation2017Model.js'
import MvPopulation2021 from '../models/mvPopulation2021Model.js'

// @desc    Fetch mine village population 2017 stats
// @route   GET /api/statistics/mv/2017
// @access  Private
const getMvPopulation2017 = asynchandler(async (req, res) => {
  const mvPopulation2017 = await MvPopulation2017.find({})

  if (!mvPopulation2017) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvPopulation2017)
})

// @desc    Fetch mine village population 2021 stats
// @route   GET /api/statistics/mv/2021
// @access  Private
const getMvPopulation2021 = asynchandler(async (req, res) => {
  const mvPopulation2021 = await MvPopulation2021.find({})

  if (!mvPopulation2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvPopulation2021)
})

export { getMvPopulation2017, getMvPopulation2021 }
