import mongoose from 'mongoose'
const Schema = mongoose.Schema

const VillageSchema = new Schema(
  {
    villageCode: {
      type: String,
      required: [true, 'Please add village code'],
      unique: true,
      trim: true,
      maxlength: [3, 'Village code must not exceed 999']
    },
    villageName: {
      type: String,
      required: [true, 'Please add village name'],
      unique: true,
      trim: true,
      maxlength: [20, 'Village name must not exceed 20 characters']
    },
    regionCode: {
      type: String,
      required: [true, 'Please add region code'],
      unique: true,
      trim: true,
      maxlength: [3, 'Village code must not exceed 999']
    },
    region: {
      type: Schema.Types.ObjectId,
      ref: 'Region'
    }
  },
  { timestamps: true }
)

const Village = mongoose.model('Village', VillageSchema)

export default Village
