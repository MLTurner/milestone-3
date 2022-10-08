const asyncHandler = require('express-async-handler');

const User = require('../models/userModel')
const Review = require('../models/reviewModel')


// Get user reviews, GET /api/reviews (PRIVATE ROUTE)
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


// Get a user review, GET /api/reviews/:id (PRIVATE ROUTE)
// This may or not be necessary, I guess I'm thinking that this is the best way to reference a specific review for comments/ deletion/ etc... just need to see it first
const getReview = asyncHandler(async (req, res) => {
  // Get user by id found in JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const review = await Review.findById(req.params.id)


  if(!review) {
    res.status(404)
    throw new Error('Review not found')
  }

  if(review.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(review);
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


// Delete a user review, DELETE /api/reviews/:id (PRIVATE ROUTE)
const deleteReview = asyncHandler(async (req, res) => {
  // Get user by id found in JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const review = await Review.findById(req.params.id)


  if(!review) {
    res.status(404)
    throw new Error('Review not found')
  }

  if(review.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await review.remove()

  res.status(200).json({ success: true });
});


// Update a user review, PUT /api/reviews/:id (PRIVATE ROUTE)

const updateReview = asyncHandler(async (req, res) => {
  // Get user by id found in JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const review = await Review.findById(req.params.id)


  if(!review) {
    res.status(404)
    throw new Error('Review not found')
  }

  if(review.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }


  const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true }) //courtesy of stack overflow, the {new: true} basically says "if a review is not already there, create it"

  res.status(200).json(updatedReview);
});

module.exports = {
  getReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview
}
