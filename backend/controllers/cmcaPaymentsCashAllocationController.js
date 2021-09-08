import asynchandler from 'express-async-handler'
import CmcaPaymentsCashAllocation2021 from '../models/cmcaPaymentsCashAllocation2021Model.js'

// @desc    Fetch cmca cash payments allocation 2021
// @route   GET /api/payments/cmca/cashallocation/year
// @access  Private
const getCmcaPaymentsCashAllocation2021 = asynchandler(async (req, res) => {
  const cmcaPaymentsCashAllocation2021 =
    await CmcaPaymentsCashAllocation2021.find({})

  if (!cmcaPaymentsCashAllocation2021) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res.status(200).json(cmcaPaymentsCashAllocation2021)
})

export { getCmcaPaymentsCashAllocation2021 }
