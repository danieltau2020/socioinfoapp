import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BankAccountSchema = new Schema(
  {
    year: {
      type: String,
      trim: true
    },
    regionCode: {
      type: String,
      required: [true, 'Please add region code'],
      maxlength: [1, 'Region code must not exceed 9']
    },
    villageCode: {
      type: String,
      required: [true, 'Please add village code'],
      maxlength: [3, 'Village code must not exceed 999']
    },
    villageName: {
      type: String,
      trim: true
    },
    dwelling: {
      type: String,
      required: [true, 'Please add dwelling'],
      minlength: [1, 'Dwelling can not be less than 1'],
      maxlength: [999, 'Dwelling must not exceed 999']
    },
    household: {
      type: String,
      required: [true, 'Please add household'],
      minlength: [1, 'Household can not be less than 1'],
      maxlength: [999, 'Household must not exceed 999']
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
    }
  },
  { timestamps: true }
)

const CmcaBankAccount2017 = mongoose.model(
  'BankAccounts2017',
  BankAccountSchema
)

export default CmcaBankAccount2017
