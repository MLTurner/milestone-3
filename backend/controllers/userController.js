// Register a new user, /api/users/register
const registerUser = (req, res) => {
  const { name, email, password } = req.body

  // Validation
  if(!name || !email || !password) {
    return res.status(400).send('Please include all fields')
  }
  res.send('Register Route')
}

// Login an existing user, /api/users/login
const loginUser = (req, res) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser,
}