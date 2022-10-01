const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

// Register a new user, /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  // ref: https://www.npmjs.com/package/bcrypt

  // Create user
  const user = await User.create({
    name,
    email,
    password: hash,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

// Login an existing user, /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  // Check user and passwords match
  if (User && (await bcrypt.compare(password, user.password))) {
    // ref: https://www.npmjs.com/package/bcrypt
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Credentials');
    // tested this out by going into postman, sending a post req to /login, adding my username and password info but purposefully made the password incorrect. Result = 401 "Invalid Credentials"
    // when passing in correct password, we get a 200 ok status and postman lists my credentials
  }
});

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
 /*ref: https://www.npmjs.com/package/jsonwebtoken
 jwt.sign({
 data: 'foobar'
 }, 'secret', { expiresIn: '1h' }); */

 // Basically, this allows us to create a JWT. We can test this by deleting the user data in Compass, and registering again. This will generate an encrypted "token". Somewhere in all of that is our actual "_id". We can verify that this token is active by going to jwt.io, pasting the token in and it returns a payload id. That id should match perfectly the assigned _id in our database.

module.exports = {
  registerUser,
  loginUser,
};
