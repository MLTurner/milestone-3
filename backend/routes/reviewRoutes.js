const express = require('express');
const router = express.Router();
const { getReviews, getReview, createReview, deleteReview, updateReview } = require('../controllers/reviewController')

const { protectRoute } = require('../middleware/authMiddleware')

router.route('/').get(protectRoute, getReviews).post(protectRoute, createReview)

router.route('/:id').get(protectRoute, getReview).delete(protectRoute, deleteReview).put(protectRoute, updateReview)

module.exports = router
