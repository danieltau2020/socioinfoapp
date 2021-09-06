import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MvBankTypesSchema = new Schema({
  year: {
    type: String,
    trim: true
  },
  villageName: {
    type: String,
    trim: true
  },
  bsp: {
    type: Number,
    trim: true
  },
  wpc: {
    type: Number,
    trim: true
  },
  anz: {
    type: Number,
    trim: true
  },
  noAccount: {
    type: Number,
    trim: true
  },
  total: {
    type: Number,
    trim: true
  }
})

const MvBankTypes2017 = mongoose.model('mvbanktypes2017', MvBankTypesSchema)

export default MvBankTypes2017
