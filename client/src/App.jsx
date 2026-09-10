import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  Highlights,
  MenuSection,
  FullMenuPage,
  AboutSection,
  ReviewsSection,
  ContactSection,
  Footer,
  DishDetailModal
} from './components';
import { api } from './services/api';
import { initialMenuItems } from './data/initialData';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'menu'
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [jainOnly, setJainOnly] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sync hash routing on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#full-menu' || window.location.hash === '#menu-page') {
        setCurrentView('menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    if (window.location.hash === '#full-menu' || window.location.hash === '#menu-page') {
      setCurrentView('menu');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'menu') {
      window.location.hash = 'full-menu';
    }
    else if (window.location.hash === '#full-menu' || window.location.hash === '#menu-page') {
        history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initial Data Fetch
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [cats, revs, allItems] = await Promise.all([
          api.getCategories(),
          api.getReviews(),
          api.getMenu('All', '', false)
        ]);
        if (cats?.length) setCategories(cats);
        if (revs?.length) setReviews(revs);
        if (allItems?.length) setMenuItems(allItems);
      } catch (err) {
        console.error('Initialization error:', err);
      }
    };
    loadInitialData();
  }, []);

  // Menu items fetch whenever category, search, or jainOnly changes on Home page
  useEffect(() => {
    if (currentView !== 'home') return;

    let isMounted = true;
    const fetchFilteredMenu = async () => {
      setLoading(true);
      try {
        const items = await api.getMenu(selectedCategory, searchQuery, jainOnly);
        if (isMounted) {
          setMenuItems(items);
        }
      } catch (err) {
        console.error('Menu load error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const timer = setTimeout(fetchFilteredMenu, 250);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [selectedCategory, searchQuery, jainOnly, currentView]);

  const handleAddReview = (newReview) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-[#f7f5f0] flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero
              onOpenFullMenu={() => handleNavigate('menu')}
            />
            <Highlights />
            <MenuSection
              menuItems={menuItems}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              jainOnly={jainOnly}
              onToggleJain={setJainOnly}
              loading={loading}
              onOpenFullMenu={() => handleNavigate('menu')}
              onSelectDish={setSelectedDish}
            />
            <AboutSection />
            <ReviewsSection reviews={reviews} onAddReview={handleAddReview} />
            <ContactSection />
          </>
        ) : (
          <FullMenuPage
            menuItems={initialMenuItems}
            categories={categories}
            onBackToHome={() => handleNavigate('home')}
            onSelectDish={setSelectedDish}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* 5-Photo Single Dish View Modal */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </div>
  );
}
