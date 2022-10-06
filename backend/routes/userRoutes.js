const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protectRoute } = require('../middleware/authMiddleware')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protectRoute, getMe);

module.exports = router;