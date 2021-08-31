import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name']
    },
    userName: {
      type: String,
      required: [true, 'Please add username']
    },
    password: {
      type: String,
      required: [true, 'Please add password'],
      minlength: 6
    },
    role: {
      type: String,
      enum: [
        'admin',
        'patron',
        'sea',
        'cr',
        'lands',
        'data entry',
        'community'
      ],
      default: 'cr'
    }
  },
  { timestamps: true }
)

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Encrypt password using bycrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', UserSchema)

export default User
