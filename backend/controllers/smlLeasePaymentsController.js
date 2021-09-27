import asynchandler from 'express-async-handler'
import SmlLeasePayments2021 from '../models/smlLeasePayments2021Model.js'

// @desc    Fetch sml lease payment 2021 batch 1
// @route   GET /api/payments/sml/2021
// @access  Private
const getSmlLeasePayments2021 = asynchandler(async (req, res) => {
  const pmtBatch = req.query.pmtBatch
  const villageCode = req.query.villCode

  if (pmtBatch) {
    if (villageCode) {
      const smlLeasePayment2021 = await SmlLeasePayments2021.find({
        pmtBatch,
        villageCode
      })

      if (!smlLeasePayment2021) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(smlLeasePayment2021)
    } else {
      const smlLeasePayment2021 = await SmlLeasePayments2021.find({ pmtBatch })

      if (!smlLeasePayment2021) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(smlLeasePayment2021)
    }
  } else {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }
})

export { getSmlLeasePayments2021 }
