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

const MvPopulation2020 = mongoose.model(
  'mvpopulation2020',
  MineVillagesPopulationSchema
)

export default MvPopulation2020
