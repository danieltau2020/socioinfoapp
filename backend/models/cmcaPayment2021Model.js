import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CmcaPaymentsSchema = new Schema(
  {
    year: {
      type: String,
      trim: true
    },
    pmtBatch: {
      type: String,
      trim: true
    },
    regionCode: {
      type: String,
      trim: true
    },
    villageCode: {
      type: String,
      trim: true
    },
    villageName: {
      type: String,
      trim: true
    },
    dwelling: {
      type: String,
      trim: true
    },
    household: {
      type: String,
      trim: true
    },
    familySize: {
      type: String,
      trim: true
    },
    totalAmount: {
      type: Number,
      trim: true
    },
    accountName: {
      type: String,
      trim: true
    },
    accountNumber: {
      type: String,
      trim: true
    },
    bank: {
      type: String,
      trim: true
    },
    accountStatus: {
      type: String,
      trim: true
    },
    paymentStatus: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
)

const CmcaPayments2021 = mongoose.model('cmcapayments2021', CmcaPaymentsSchema)

export default CmcaPayments2021
