import asynchandler from 'express-async-handler'
import MvBankAccount2017 from '../models/mvBankAccount2017Model.js'
import MvBankAccount2021 from '../models/mvBankAccount2021Model.js'

// @desc    Fetch all bank accounts for mine vilalges
// @route   GET /api/bankaccount/mv
// @access  Private
const getMvBankAccounts = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (year === '2017') {
    if (villageCode) {
      const bankAccounts = await MvBankAccount2017.find({
        villageCode
      })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MvBankAccount2017.find({})
      res.status(200).json(bankAccounts)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const bankAccounts = await MvBankAccount2021.find({
        villageCode
      })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MvBankAccount2021.find({})
      res.status(200).json(bankAccounts)
    }
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

export { getMvBankAccounts }
