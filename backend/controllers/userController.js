import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import createCookie from '../utils/createCookie.js'
import User from '../models/userModel.js'

// @desc    Register a new user
// @route   POST /api/user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, userName, password } = req.body

  // Find user
  const userExists = await User.findOne({ userName })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    userName,
    password
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

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
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  // Match user and password
  if (user && (await user.matchPassword(password))) {
    // res.status(200).json({
    //   _id: user._id,
    //   name: user.name,
    //   userName: user.userName,
    //   role: user.role,
    //   token: generateToken(user._id)
    // })

    // Send cookie with token in it
    createCookie(user, 200, res)
  } else {
    res.status(400)
    throw new Error('Invalid username or password')
  }
})

// @desc    Log out user
// @route   GET /api/user/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: process.env.NODE_ENV === 'production' ? true : false,
    httpOnly: true
  }
  // res
  //   .status(200)
  //   .cookie('token', 'expiredtoken', options)
  //   .json('Log out successful')
  res.status(200).clearCookie('token').send('Log out')
})

export { registerUser, loginUser, logoutUser }
