import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PersonSchema = new Schema(
  {
    year: {
      type: String,
      trim: true
    },
    regionCode: {
      type: String,
      required: [true, 'Please add region code'],
      maxlength: [1, 'Region code must not exceed 9']
    },
    villageCode: {
      type: String,
      required: [true, 'Please add village code'],
      maxlength: [3, 'Village code must not exceed 999']
    },
    villageName: {
      type: String,
      trim: true
    },
    dwelling: {
      type: String,
      required: [true, 'Please add dwelling'],
      minlength: [1, 'Dwelling can not be less than 1'],
      maxlength: [999, 'Dwelling must not exceed 999']
    },
    household: {
      type: String,
      required: [true, 'Please add household'],
      minlength: [1, 'Household can not be less than 1'],
      maxlength: [999, 'Household must not exceed 999']
    },
    firstName: {
      type: String,
      required: [true, 'Please add first nanme'],
      trim: true,
      maxLength: [20, 'First name must not exceed 20 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Please add last nanme'],
      trim: true,
      maxLength: [20, 'Last name must not exceed 20 characters']
    },
    gender: {
      type: String,
      required: [true, 'Please add gender'],
      trim: true,
      maxlength: [1, 'Gender can not be more than 2 charaters']
    },
    relationship: {
      type: String,
      required: [true, 'Please add relationship'],
      trim: true,
      maxlength: [20, 'Relationship must not exceed 15 characters']
    },
    ageGroup: {
      type: String,
      required: [true, 'Please add age group'],
      trim: true,
      maxlength: [15, 'Age group can not be more than 15 characters']
    },
    dob: {
      type: String,
      trim: true
    },
    village: {
      type: Schema.Types.ObjectId,
      ref: 'Village'
    }
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // },
    // updatedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // }
  },
  { timestamps: true }
)

const CmcaPerson2021 = mongoose.model('People2021', PersonSchema)

export default CmcaPerson2021
