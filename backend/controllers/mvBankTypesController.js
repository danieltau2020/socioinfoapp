import asynchandler from 'express-async-handler'
import MvBankTypes2017 from '../models/mvBankTypes2017Model.js'
import MvBankTypes2021 from '../models/mvBankTypes2021Model.js'

// @desc    Fetch mine villages bank types 2017 stats
// @route   GET /api/statistics/bankaccounts/mv/2017
// @access  Private
const getMvBankTypes2017 = asynchandler(async (req, res) => {
  const mvBankTypes2017 = await MvBankTypes2017.find({})

  if (!mvBankTypes2017) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvBankTypes2017)
})

// @desc    Fetch mine villages bank types 2021 stats
// @route   GET /api/statistics/bankaccounts/mv/2017
// @access  Private
const getMvBankTypes2021 = asynchandler(async (req, res) => {
  const mvBankTypes2021 = await MvBankTypes2021.find({})

  if (!mvBankTypes2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvBankTypes2021)
})

export { getMvBankTypes2017, getMvBankTypes2021 }
