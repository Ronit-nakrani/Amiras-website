import express from 'express';
import mongoose from 'mongoose';
import { MenuItem } from '../models/MenuItem.js';
import { memoryStore } from '../data/inMemoryStore.js';

const router = express.Router();

const isDbConnected = () => mongoose.connection.readyState === 1;

// GET /api/menu - Get all menu items with filtering and search
router.get('/', async (req, res) => {
  try {
    const { category, search, jain } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      if (jain === 'true') {
        query.isJain = true;
      }
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { gujaratiName: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } }
        ];
      }
      const items = await MenuItem.find(query).sort({ isBestseller: -1, rating: -1 });
      return res.json({ success: true, count: items.length, data: items, source: 'database' });
    }

    // Fallback to memory store
    const items = memoryStore.getMenuItems({ category, search, jain: jain === 'true' });
    return res.json({ success: true, count: items.length, data: items, source: 'memory' });
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching menu items', error: error.message });
  }
});

// GET /api/menu/categories - Get available categories
router.get('/categories', (req, res) => {
  const categories = memoryStore.getCategories();
  res.json({ success: true, data: categories });
});

// GET /api/menu/info - Get restaurant profile info
router.get('/info', (req, res) => {
  const info = memoryStore.getRestaurantInfo();
  res.json({ success: true, data: info });
});

export default router;

