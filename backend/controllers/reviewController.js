const asyncHandler = require('express-async-handler');

const User = require('../models/userModel')
const Review = require('../models/reviewModel')


// Get user reviews, GET /api/reviews/me (PRIVATE ROUTE)
const getReviews = asyncHandler(async (req, res) => {
  // Get user by id found in JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const reviews = await Review.find({ user: req.user.id })

  res.status(200).json(reviews);
});


// Create new review, POST /api/reviews/me (PRIVATE ROUTE)
const createReview = asyncHandler(async (req, res) => {
  const { category, description } = req.body

  if(!category || !description) {
    res.status(400)
    throw new Error('Please add a category and description')
  }

  // Get user by id found in JWT
const user = await User.findById(req.user.id)

if(!user) {
  res.status(401)
  throw new Error('User not found')
}

const review = await Review.create({
  category,
  description,
  user: req.user.id,
  status: 'new'
})

  res.status(201).json(review);
});




module.exports = {
  getReviews,
  createReview,
}
