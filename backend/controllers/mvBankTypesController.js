import asynchandler from 'express-async-handler'
import MvBankTypes2020 from '../models/mvBankTypes2020Model.js'
import MvBankTypes2021 from '../models/mvBankTypes2021Model.js'

// @desc    Fetch mine villages bank types 2020 stats
// @route   GET /api/statistics/bankaccounts/mv/2020
// @access  Private
const getMvBankTypes2020 = asynchandler(async (req, res) => {
  const mvBankTypes2020 = await MvBankTypes2020.find({})

  if (!mvBankTypes2020) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvBankTypes2020)
})

// @desc    Fetch mine villages bank types 2021 stats
// @route   GET /api/statistics/bankaccounts/mv/2021
// @access  Private
const getMvBankTypes2021 = asynchandler(async (req, res) => {
  const mvBankTypes2021 = await MvBankTypes2021.find({})

  if (!mvBankTypes2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(mvBankTypes2021)
})

export { getMvBankTypes2020, getMvBankTypes2021 }
