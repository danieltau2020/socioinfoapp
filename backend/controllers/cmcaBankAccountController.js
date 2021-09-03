import asynchandler from 'express-async-handler'
import CmcaBankAccount2017 from '../models/cmcaBankAccountModel2017.js'
import CmcaBankAccount2021 from '../models/cmcaBankAccountModel2021.js'

// @desc    Fetch all bank accounts
// @route   GET /api/bankaccount
// @access  Private
const getCmcaBankAccounts = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (year === '2017') {
    if (villageCode) {
      const bankAccounts = await CmcaBankAccount2017.find({ villageCode })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await CmcaBankAccount2017.find({})
      res.status(200).json(bankAccounts)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const bankAccounts = await CmcaBankAccount2021.find({ villageCode })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await CmcaBankAccount2021.find({})
      res.status(200).json(bankAccounts)
    }
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

export { getCmcaBankAccounts }
