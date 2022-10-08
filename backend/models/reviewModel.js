const mongoose = require('mongoose');

// edit review schema to reflect what we want the user to be able to review (beta)
const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['Instructor', 'Course Material', 'Technical Errors', 'Homework', 'Satisfaction'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    status: {
      type: String,
      enum: ['new', 'viewed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema)