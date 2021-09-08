import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  // Get token from header
  let token

  // Check if no token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Verify token
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded._id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Access denied')
    }
  } else {
    res.status(401)
    throw new Error('Access denied')
  }
})

const admin = asyncHandler((req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(401)
    throw new Error('Access denied')
  }
})

export { protect, admin }
