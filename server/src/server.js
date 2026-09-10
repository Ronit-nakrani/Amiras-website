import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import menuRoutes from './routes/menuRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import { MenuItem } from './models/MenuItem.js';
import { Review } from './models/Review.js';
import { seedMenuItems, seedReviews } from './data/seedData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_amiras';

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reviews', reviewRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    restaurant: 'Hotel Amiras - Pure Veg, Surat',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'in-memory-fallback'
  });
});

// MongoDB Connection & Auto-Seed
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 2000 // Don't block long if MongoDB isn't running
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // Seed database if empty
    const menuCount = await MenuItem.countDocuments();
    if (menuCount === 0) {
      console.log('🌱 Seeding initial Hotel Amiras menu items to MongoDB...');
      await MenuItem.insertMany(seedMenuItems);
      console.log(`✅ Successfully seeded ${seedMenuItems.length} dishes.`);
    }

    const reviewCount = await Review.countDocuments();
    if (reviewCount === 0) {
      console.log('🌱 Seeding authentic customer reviews to MongoDB...');
      await Review.insertMany(seedReviews);
      console.log(`✅ Successfully seeded reviews.`);
    }
  } catch (error) {
    console.warn(`⚠️ MongoDB connection unavailable (${error.message}).`);
    console.log('⚡ Running in In-Memory Mode with full seed data enabled.');
  }
};

// Start Express Server
app.listen(PORT, async () => {
  console.log(`🏨 Hotel Amiras backend server listening on port ${PORT}`);
  console.log(`📍 API endpoints available at http://localhost:${PORT}/api/menu`);
  await connectDB();
});
