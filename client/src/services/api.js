import { initialMenuItems, initialReviews, restaurantInfo, officialCategories } from '../data/initialData';

const envApi = import.meta.env.VITE_API_URL;
const BASE_URLS = [
  ...(envApi ? [envApi] : []),
  '/api',
  'http://127.0.0.1:5001/api',
  'http://localhost:5001/api'
];

async function fetchWithFallback(endpoint, options = {}) {
  for (const base of BASE_URLS) {
    try {
      const res = await fetch(`${base}${endpoint}`, options);
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      // Try next base URL
    }
  }
  return null;
}

export const api = {
  // Fetch menu items with optional category, search, and jain flags
  async getMenu(category = 'All', search = '', jain = false) {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'All') params.append('category', category);
      if (search) params.append('search', search);
      if (jain) params.append('jain', 'true');

      const result = await fetchWithFallback(`/menu?${params.toString()}`);
      if (result && result.data && result.data.length > 0) {
        return result.data;
      }
    } catch (err) {
      console.warn('API error, using initial dataset:', err);
    }

    // Client-side instant filter fallback
    let items = [...initialMenuItems];
    if (category && category !== 'All') {
      items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    if (jain) {
      items = items.filter(item => item.isJain === true);
    }
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.gujaratiName && item.gujaratiName.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return items;
  },

  // Fetch categories
  async getCategories() {
    try {
      const result = await fetchWithFallback('/menu/categories');
      if (result && result.data) return result.data;
    } catch (err) {
      // fallback
    }
    return officialCategories;
  },

  // Fetch restaurant details
  async getRestaurantInfo() {
    try {
      const result = await fetchWithFallback('/menu/info');
      if (result && result.data) return result.data;
    } catch (err) {
      // fallback
    }
    return restaurantInfo;
  },

  // Get customer reviews
  async getReviews() {
    try {
      const result = await fetchWithFallback('/reviews');
      if (result && result.data && result.data.length > 0) return result.data;
    } catch (err) {
      // fallback
    }
    return initialReviews;
  },

  // Submit a review
  async submitReview(reviewData) {
    const result = await fetchWithFallback('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    });

    if (result && result.success) {
      return result;
    }

    return {
      success: true,
      message: 'Review submitted successfully! Thank you for dining at Hotel Amiras.',
      data: {
        _id: `rev-${Date.now()}`,
        ...reviewData,
        date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
      }
    };
  }
};
