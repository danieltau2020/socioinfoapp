import generateToken from './generateToken.js'

const createCookie = (user, statusCode, res) => {
  // Create token
  const token = generateToken(user)

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === 'production' ? true : false,
    httpOnly: true
  }

  res.status(statusCode).cookie('token', token, options).json({
    _id: user._id,
    name: user.name,
    userName: user.userName,
    role: user.role
  })

  // res.status(statusCode).cookie({'token': token, 'userInfo': {}}, options).json({
  //   _id: user._id,
  //   name: user.name,
  //   userName: user.userName,
  //   role: user.role,
  //   token: token
  // })
}

export default createCookie
