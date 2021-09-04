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

const CmcaRegionPopulation2021 = mongoose.model(
  'cmcaregionpopulation2021',
  CmcaRegionPopulationSchema
)

export default CmcaRegionPopulation2021
