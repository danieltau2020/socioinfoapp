import asynchandler from 'express-async-handler'
import CmcaPerson2017 from '../models/cmcaPerson2017Model.js'
import CmcaPerson2021 from '../models/cmcaPerson2021Model.js'
import CmcaBankAccount2017 from '../models/cmcaBankAccount2017Model.js'
import CmcaBankAccount2021 from '../models/cmcaBankAccount2021Model.js'
import CmcaPayment2021Model from '../models/cmcaPayment2021Model.js'
import Region from '../models/regionModel.js'
import Village from '../models/villageModel.js'

// @desc    Fetch cmca family list 2017 dataset
// @route   GET /api/familylist/cmca/2017
// @access  Private
const getCmcaFamilyList2017 = asynchandler(async (req, res) => {
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

  const pmtBatch = {}

  const familyList = await CmcaPerson2017.find({
    villageCode,
    dwelling,
    household
  })

  const familyAccount = await CmcaBankAccount2017.findOne({
    villageCode,
    dwelling,
    household
  }).select(['accountName', 'accountNumber', 'bank', 'accountStatus'])

  if (!regionName || !villageName || !familyList || !familyAccount) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res
    .status(200)
    .json({ regionName, villageName, pmtBatch, familyAccount, familyList })
})

// @desc    Fetch cmca family list 2021 dataset
// @route   GET /api/familylist/cmca/2021
// @access  Private
const getCmcaFamilyList2021 = asynchandler(async (req, res) => {
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

  const pmtBatch = await CmcaPayment2021Model.findOne({
    villageCode,
    dwelling,
    household
  }).select('pmtBatch')

  const familyList = await CmcaPerson2021.find({
    villageCode,
    dwelling,
    household
  })

  const familyAccount = await CmcaBankAccount2021.findOne({
    villageCode,
    dwelling,
    household
  }).select(['accountName', 'accountNumber', 'bank', 'accountStatus'])

  if (
    !regionName ||
    !villageName ||
    !pmtBatch ||
    !familyList ||
    !familyAccount
  ) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res
    .status(200)
    .json({ regionName, villageName, pmtBatch, familyAccount, familyList })
})

export { getCmcaFamilyList2017, getCmcaFamilyList2021 }
