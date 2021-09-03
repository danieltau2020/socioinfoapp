import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CmcaKeyStatsSchema = new Schema(
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

const CmcaKeyStats = mongoose.model('cmcakeystats', CmcaKeyStatsSchema)

export default CmcaKeyStats
