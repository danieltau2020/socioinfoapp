import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CmcaPaymentsCashAllocationSchema = new Schema({
  year: {
    type: String,
    trim: true
  },
  regionName: {
    type: String,
    trim: true
  },
  cashAllocation: {
    type: Number,
    trim: true
  },
  totalPopulation: {
    type: Number,
    trim: true
  },
  amountPerCapita: {
    type: Number,
    trim: true
  }
})

const CmcaPaymentsCashAllocation2021 = mongoose.model(
  'cmcapaymentscashallocation2021',
  CmcaPaymentsCashAllocationSchema
)

export default CmcaPaymentsCashAllocation2021
