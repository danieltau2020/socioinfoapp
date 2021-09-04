import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MineVillagesPopulationSchema = new Schema({
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

const MvPopulation2021 = mongoose.model(
  'mvpopulation2021',
  MineVillagesPopulationSchema
)

export default MvPopulation2021
