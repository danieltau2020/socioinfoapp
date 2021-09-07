import asynchandler from 'express-async-handler'
import CmcaBankAccount2017 from '../models/cmcaBankAccount2017Model.js'
import CmcaBankAccount2021 from '../models/cmcaBankAccount2021Model.js'

// @desc    Fetch all bank accounts
// @route   GET /api/bankaccount
// @access  Private
const getCmcaBankAccounts = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (!year) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  if (year === '2017') {
    if (villageCode) {
      const bankAccounts = await CmcaBankAccount2017.find({ villageCode })

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await CmcaBankAccount2017.find({})

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const bankAccounts = await CmcaBankAccount2021.find({ villageCode })

      if (!bankAccounts) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await CmcaBankAccount2021.find({})

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

export { getCmcaBankAccounts }
