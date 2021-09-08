import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Register a new user
// @route   POST /api/user
// @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, userName, password } = req.body

//   // Find user
//   const userExists = await User.findOne({ userName })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   const user = await User.create({
//     name,
//     userName,
//     password
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       userName: user.userName,
//       token: generateToken(user)
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

// @desc    Login user & get token
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body

  if (!userName || !password) {
    res.status(400)
    throw new Error('Please provide username and password')
  }

  // Find user
  const user = await User.findOne({ userName })

  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }

  // Match user and password
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      role: user.role,
      token: generateToken(user)
    })
  } else {
    res.status(401)
    throw new Error('Invalid username or password')
  }
})

export { loginUser }
