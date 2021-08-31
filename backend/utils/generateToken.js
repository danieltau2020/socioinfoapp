import jwt from 'jsonwebtoken'

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      userName: user.userName,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE
    }
  )
}

export default generateToken
