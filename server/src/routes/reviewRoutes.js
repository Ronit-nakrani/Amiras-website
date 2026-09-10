import express from 'express';
import mongoose from 'mongoose';
import { Review } from '../models/Review.js';
import { memoryStore } from '../data/inMemoryStore.js';

const router = express.Router();

const isDbConnected = () => mongoose.connection.readyState === 1;

// GET /api/reviews - Get customer reviews
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const reviews = await Review.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: reviews.length, data: reviews });
    }
    const reviews = memoryStore.getReviews();
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch reviews' });
  }
});

// POST /api/reviews - Submit a new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, comment, dishRecommended } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: 'Name, rating (1-5), and comment are required.'
      });
    }

    const numericRating = Math.max(1, Math.min(5, Number(rating)));

    if (isDbConnected()) {
      const review = await Review.create({
        name,
        rating: numericRating,
        comment,
        dishRecommended: dishRecommended || 'Paneer Tikka Masala',
      });

      return res.status(201).json({
        success: true,
        message: 'Review submitted successfully! Thank you for dining at Hotel Amiras.',
        data: review
      });
    }

    const review = memoryStore.addReview({
      name,
      rating: numericRating,
      comment,
      dishRecommended: dishRecommended || 'Paneer Tikka Masala'
    });

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully! Thank you for dining at Hotel Amiras.',
      data: review
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ success: false, message: 'Failed to submit review', error: error.message });
  }
});

export default router;

