import asynchandler from 'express-async-handler'
import MineVillagesBankAccount2017 from '../models/mvBankAccountModel2017.js'
import MineVillagesBankAccount2021 from '../models/mvBankAccountModel2021.js'

// @desc    Fetch all bank accounts for mine vilalges
// @route   GET /api/bankaccount/minevillages
// @access  Private
const getMVBankAccounts = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const dataSet = req.query.dataSet

  if (dataSet === '2017') {
    if (villageCode) {
      const bankAccounts = await MineVillagesBankAccount2017.find({
        villageCode
      })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MineVillagesBankAccount2017.find({})
      res.status(200).json(bankAccounts)
    }
  } else if (dataSet === '2021') {
    if (villageCode) {
      const bankAccounts = await MineVillagesBankAccount2021.find({
        villageCode
      })
      res.status(200).json(bankAccounts)
    } else {
      const bankAccounts = await MineVillagesBankAccount2021.find({})
      res.status(200).json(bankAccounts)
    }
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

export { getMVBankAccounts }
