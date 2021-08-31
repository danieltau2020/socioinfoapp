import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (!req.cookies) {
    res.clearCookie('token')
    res.status(401)
    throw new Error('Access denied')
  }

  if (!req.cookies.token)
    if (req.cookies.token) {
      try {
        token = req.cookies.token

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded._id).select('-password')
      } catch (error) {
        res.clearCookie('token')
        res.status(401)
        throw new Error('Access denied')
      }
    } else {
      res.clearCookie('token')
      res.status(401)
      throw new Error('Access denied')
    }
  next()
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
