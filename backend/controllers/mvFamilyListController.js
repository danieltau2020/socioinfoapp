import asynchandler from 'express-async-handler'
import MvPerson2017 from '../models/mvPerson2017Model.js'
import MvPerson2021 from '../models/mvPerson2021Model.js'
import MvBankAccount2017 from '../models/mvBankAccount2017Model.js'
import MvBankAccount2021 from '../models/mvBankAccount2021Model.js'
import Region from '../models/regionModel.js'
import Village from '../models/villageModel.js'

// @desc    Fetch mine villages family list 2017 dataset
// @route   GET /api/familylist/mv/2017
// @access  Private
const getMvFamilyList2017 = asynchandler(async (req, res) => {
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

  const familyList = await MvPerson2017.find({
    villageCode,
    dwelling,
    household
  })

  const familyAccount = await MvBankAccount2017.findOne({
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

export { getMvFamilyList2017, getMvFamilyList2021 }
