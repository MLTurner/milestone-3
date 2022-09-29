const asyncHandler = require('express-async-handler');

// Register a new user, /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }
  res.send('Register Route');
});

// Login an existing user, /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};
