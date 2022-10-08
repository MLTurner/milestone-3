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
      enum: ['Bathroom', 'Service', 'Safety', 'Hot Food'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    status: {
      type: String,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema)