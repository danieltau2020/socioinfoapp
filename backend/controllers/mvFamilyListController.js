import asynchandler from 'express-async-handler'
import MvPerson2020 from '../models/mvPerson2020Model.js'
import MvPerson2021 from '../models/mvPerson2021Model.js'
import MvBankAccount2020 from '../models/mvBankAccount2020Model.js'
import MvBankAccount2021 from '../models/mvBankAccount2021Model.js'
import Region from '../models/regionModel.js'
import Village from '../models/villageModel.js'

// @desc    Fetch mine villages family list 2020 dataset
// @route   GET /api/familylist/mv/2020
// @access  Private
const getMvFamilyList2020 = asynchandler(async (req, res) => {
  const regionCode = req.query.regCode
  const villageCode = req.query.villCode
  const dwelling = req.query.dwelling
  const household = req.query.household

  if (!regionCode || !villageCode || !dwelling || !household) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  const regionName = await Region.findOne({ regionCode }).select('regionName')
  const villageName = await Village.findOne({ villageCode }).select(
    'villageName'
  )

  const familyList = await MvPerson2020.find({
    villageCode,
    dwelling,
    household
  })

  const familyAccount = await MvBankAccount2020.findOne({
    villageCode,
    dwelling,
    household
  }).select(['accountName', 'accountNumber', 'bank', 'accountStatus'])

  if (!regionName || !villageName || !familyList || !familyAccount) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json({ regionName, villageName, familyAccount, familyList })
})

// @desc    Fetch mine villages family list 2021 dataset
// @route   GET /api/familylist/mv/2021
// @access  Private
const getMvFamilyList2021 = asynchandler(async (req, res) => {
  const regionCode = req.query.regCode
  const villageCode = req.query.villCode
  const dwelling = req.query.dwelling
  const household = req.query.household

  if (!regionCode || !villageCode || !dwelling || !household) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  const regionName = await Region.findOne({ regionCode }).select('regionName')
  const villageName = await Village.findOne({ villageCode }).select(
    'villageName'
  )

  const familyList = await MvPerson2021.find({
    villageCode,
    dwelling,
    household
  })

  const familyAccount = await MvBankAccount2021.findOne({
    villageCode,
    dwelling,
    household
  }).select(['accountName', 'accountNumber', 'bank', 'accountStatus'])

  if (!regionName || !villageName || !familyList || !familyAccount) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json({ regionName, villageName, familyAccount, familyList })
})

export { getMvFamilyList2020, getMvFamilyList2021 }
