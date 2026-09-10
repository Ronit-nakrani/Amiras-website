import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Reviewer name is required'],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
  },
  dishRecommended: {
    type: String,
    default: 'Paneer Tikka Masala',
  },
  date: {
    type: String,
    default: () => new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
  }
}, {
  timestamps: true,
});

export const Review = mongoose.model('Review', reviewSchema);

