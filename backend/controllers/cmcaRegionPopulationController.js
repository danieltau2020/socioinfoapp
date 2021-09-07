import asynchandler from 'express-async-handler'
import CmcaRegionPopulation2017 from '../models/cmcaRegionPopulation2017Model.js'
import CmcaRegionPopulation2021 from '../models/cmcaRegionPopulation2021Model.js'

// @desc    Fetch cmca region population 2017 stats
// @route   GET /api/statistics/cmca/:year
// @access  Private
const getCmcaRegionPopulation2017 = asynchandler(async (req, res) => {
  const cmcaRegionPopulation2017 = await CmcaRegionPopulation2017.find({})

  if (!cmcaRegionPopulation2017) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaRegionPopulation2017)
})

// @desc    Fetch cmca region population 2021 stats
// @route   GET /api/statistics/cmca/:year
// @access  Private
const getCmcaRegionPopulation2021 = asynchandler(async (req, res) => {
  const cmcaRegionPopulation2021 = await CmcaRegionPopulation2021.find({})

  if (!cmcaRegionPopulation2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaRegionPopulation2021)
})

export { getCmcaRegionPopulation2017, getCmcaRegionPopulation2021 }
