import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RegionSchema = new Schema(
  {
    regionCode: {
      type: String,
      required: [true, 'Please add region code'],
      unique: true,
      trim: true,
      maxlength: [1, 'Region code must not exceed 9']
    },
    regionName: {
      type: String,
      required: [true, 'Please add region name'],
      unique: true,
      trim: true,
      maxlength: [20, 'Region name must not exceed 20 characters']
    }
    //   createdBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   },
    //   updatedBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// Reverse populate with virtuals
RegionSchema.virtual('villages', {
  ref: 'Village',
  localField: '_id',
  foreignField: 'region',
  justOne: false
})

const Region = mongoose.model('regions', RegionSchema)

export default Region
