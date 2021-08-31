import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CMCAKeyStatsSchema = new Schema(
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

const CMCAKeyStats = mongoose.model('cmcakeystats', CMCAKeyStatsSchema)

export default CMCAKeyStats
