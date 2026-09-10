import { seedMenuItems, seedReviews, restaurantInfo, officialCategories } from './seedData.js';

let menuItems = [...seedMenuItems.map((item, index) => ({ _id: `seed-menu-${index + 1}`, ...item }))];
let reviews = [...seedReviews.map((rev, index) => ({ _id: `seed-rev-${index + 1}`, ...rev }))];

export const memoryStore = {
  getMenuItems: (filter = {}) => {
    let result = [...menuItems];
    if (filter.category && filter.category !== 'All') {
      result = result.filter(item => item.category.toLowerCase() === filter.category.toLowerCase());
    }
    if (filter.jain) {
      result = result.filter(item => item.isJain === true);
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.gujaratiName && item.gujaratiName.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return result;
  },

  getCategories: () => officialCategories,

  getRestaurantInfo: () => restaurantInfo,

  getReviews: () => reviews,

  addReview: (reviewData) => {
    const newReview = {
      _id: `rev-${Date.now()}`,
      ...reviewData,
      date: reviewData.date || new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    reviews.unshift(newReview);
    return newReview;
  }
};
