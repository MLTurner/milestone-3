const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/reviewController')

const { protectRoute } = require('../middleware/authMiddleware')

router.route('/').get(protectRoute, getReviews).post(protectRoute, createReview)

module.exports = router
