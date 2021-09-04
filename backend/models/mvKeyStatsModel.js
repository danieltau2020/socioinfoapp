import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MvKeyStatsSchema = new Schema(
  {
    year: {
      type: String,
      unique: true,
      trim: true
    },
    peopleCount: {
      type: Number,
      trim: true
    },

    bankAccountCount: {
      type: Number,
      trim: true
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

const MvKeyStats = mongoose.model('mvkeystats', MvKeyStatsSchema)

export default MvKeyStats
