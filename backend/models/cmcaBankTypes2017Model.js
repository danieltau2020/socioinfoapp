import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CmcaBankTypesSchema = new Schema({
  year: {
    type: String,
    trim: true
  },
  regionName: {
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

const CmcaBankTypes2017 = mongoose.model(
  'cmcabanktypes2017',
  CmcaBankTypesSchema
)

export default CmcaBankTypes2017
