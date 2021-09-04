import asynchandler from 'express-async-handler'
import CmcaRegionPopulation2017 from '../models/cmcaRegionPopulation2017Model.js'
import CmcaRegionPopulation2021 from '../models/cmcaRegionPopulation2021Model.js'

// @desc    Fetch cmca region population 2017 stats
// @route   GET /api/statistics/cmca/2017
// @access  Private
const getCmcaRegionPopulation2017 = asynchandler(async (req, res) => {
  const cmcaRegionPopulation2017 = await CmcaRegionPopulation2017.find({})

  res.status(200).json(cmcaRegionPopulation2017)
})

// @desc    Fetch cmca region population 2021 stats
// @route   GET /api/statistics/cmca/2017
// @access  Private
const getCmcaRegionPopulation2021 = asynchandler(async (req, res) => {
  const cmcaRegionPopulation2021 = await CmcaRegionPopulation2021.find({})
  res.status(200).json(cmcaRegionPopulation2021)
})

export { getCmcaRegionPopulation2017, getCmcaRegionPopulation2021 }
