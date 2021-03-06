import asynchandler from 'express-async-handler'
import MvBankAccount2020 from '../models/mvBankAccount2020Model.js'
import MvBankAccount2021 from '../models/mvBankAccount2021Model.js'

// @desc    Fetch all bank accounts for mine vilalges
// @route   GET /api/bankaccount/mv
// @access  Private
const getMvBankAccounts = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (!year) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  if (year === '2020') {
    if (villageCode) {
      const bankAccounts = await MvBankAccount2020.find({
        villageCode
      })

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MvBankAccount2020.find({})

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const bankAccounts = await MvBankAccount2021.find({
        villageCode
      })

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MvBankAccount2021.find({})

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    }
  } else {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }
})

export { getMvBankAccounts }
