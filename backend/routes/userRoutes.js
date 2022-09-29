const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/register', (req, res) => {
  res.send('Register Route')
});

router.post('/login', (req, res) => {
  res.send('Login Route')
});

module.exports = router