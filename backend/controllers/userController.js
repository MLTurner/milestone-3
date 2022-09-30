const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// Register a new user, /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exists
  const userExists = await User.findOne({ email: email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSaltSync(10)
  const hash = await bcrypt.hashSync(password, salt)
  // ref from https://www.npmjs.com/package/bcrypt

  // Create user
  const user = await User.create({
    name,
    email,
    password: hash
  })

   if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
   } else {
    res.status(400)
    throw new Error('Invalid User Data')
   }
});

// Login an existing user, /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};
