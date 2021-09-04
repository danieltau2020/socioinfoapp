import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CmcaRegionPopulationSchema = new Schema({
  year: {
    type: String,
    trim: true
  },
  regionName: {
    type: String,
    trim: true
  },
  male: {
    type: Number,
    trim: true
  },
  female: {
    type: Number,
    trim: true
  },
  total: {
    type: Number,
    trim: true
  }
})

const CmcaRegionPopulation2017 = mongoose.model(
  'cmcaregionpopulation2017',
  CmcaRegionPopulationSchema
)

export default CmcaRegionPopulation2017
