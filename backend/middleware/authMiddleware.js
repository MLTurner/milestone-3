const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protectRoute = asyncHandler(async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      // formated as 'Bearer' <space> token, so this allows us to split it into an array where 'Bearer' is assigned by (' ') and bc arrays are zero-based, we want the [1] position.


      // Verify token
      const decodedToken = jwt.verify(token, process.env.JWT_Secret)
      // Get user from token
      req.user = await User.findById(decodedToken.id).select('-password')
      // we don't want the password field, so the '-password' excludes the password data for the User
      
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not Authorized')

    }
  }

  if(!token) {
    res.status(401)
      throw new Error('Not Authorized')
  }
})

 module.exports = { protectRoute }