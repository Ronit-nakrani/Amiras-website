import { seedMenuItems, seedReviews, restaurantInfo, officialCategories } from '../../../server/src/data/seedData.js';

export { restaurantInfo, officialCategories };
export const initialMenuItems = seedMenuItems.map((item, index) => ({
  _id: `client-menu-${index + 1}`,
  ...item
}));
export const initialReviews = seedReviews.map((rev, index) => ({
  _id: `client-rev-${index + 1}`,
  ...rev
}));
