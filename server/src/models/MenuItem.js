import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Dish name is required'],
    trim: true,
  },
  gujaratiName: {
    type: String,
    default: '',
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  },
  isVegetarian: {
    type: Boolean,
    default: true,
  },
  isJain: {
    type: Boolean,
    default: false,
  },
  isSpicy: {
    type: Boolean,
    default: false,
  },
  isBestseller: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5,
  },
  portionSize: {
    type: String,
    default: 'Serves 1-2',
  }
}, {
  timestamps: true,
});

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);
