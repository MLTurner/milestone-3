const asyncHandler = require('express-async-handler');

const User = require('../models/userModel')
const Review = require('../models/reviewModel')


// Get user reviews, GET /api/reviews/me (PRIVATE ROUTE)
const getReviews = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'getReviews'});
});


// Create new review, POST /api/reviews/me (PRIVATE ROUTE)
const createReview = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'createReview'});
});


module.exports = {
  getReviews,
  createReview,
}
