import asynchandler from 'express-async-handler'
import CmcaPayments2021 from '../models/cmcaPayment2021Model.js'

// @desc    Fetch cmca payment 2021 batch 1
// @route   GET /api/payments/cmca/2021
// @access  Private
const getCmcaPayments2021 = asynchandler(async (req, res) => {
  const pmtBatch = req.query.pmtBatch
  const villageCode = req.query.villCode

  if (pmtBatch) {
    if (villageCode) {
      const cmcaPayment2021 = await CmcaPayments2021.find({
        pmtBatch,
        villageCode
      })

      if (cmcaPayment2021) {
        res.status(200).json(cmcaPayment2021)
      } else {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }
    } else {
      const cmcaPayment2021 = await CmcaPayments2021.find({ pmtBatch })

      if (cmcaPayment2021) {
        res.status(200).json(cmcaPayment2021)
      } else {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }
    }
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

export { getCmcaPayments2021 }
