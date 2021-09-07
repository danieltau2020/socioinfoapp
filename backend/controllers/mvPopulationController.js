import asynchandler from 'express-async-handler'
import MvPopulation2020 from '../models/mvPopulation2020Model.js'
import MvPopulation2021 from '../models/mvPopulation2021Model.js'

// @desc    Fetch mine village population 2020 stats
// @route   GET /api/statistics/mv/2020
// @access  Private
const getMvPopulation2020 = asynchandler(async (req, res) => {
  const mvPopulation2020 = await MvPopulation2020.find({})

  if (!mvPopulation2020) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvPopulation2020)
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

export { getMvPopulation2020, getMvPopulation2021 }
