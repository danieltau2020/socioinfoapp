import asynchandler from 'express-async-handler'
import CmcaBankTypes2017 from '../models/cmcaBankTypes2017Model.js'
import CmcaBankTypes2021 from '../models/cmcaBankTypes2021Model.js'

// @desc    Fetch cmca region bank types 2017 stats
// @route   GET /api/statistics/bankaccounts/cmca/2017
// @access  Private
const getCmcaBankTypes2017 = asynchandler(async (req, res) => {
  const cmcaBankTypes2017 = await CmcaBankTypes2017.find({})

  if (!CmcaBankTypes2017) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaBankTypes2017)
})

// @desc    Fetch cmca region bank types 2021 stats
// @route   GET /api/statistics/bankaccounts/cmca/2017
// @access  Private
const getCmcaBankTypes2021 = asynchandler(async (req, res) => {
  const cmcaBankTypes2021 = await CmcaBankTypes2021.find({})

  if (!cmcaBankTypes2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaBankTypes2021)
})

export { getCmcaBankTypes2017, getCmcaBankTypes2021 }
