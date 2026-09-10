# Hotel Amiras Website (MERN Stack)

A stylish, responsive, and modern full-stack web application for **Hotel Amiras**, Surat’s premier pure-vegetarian casual dining restaurant located at Galaxy Point, Nana Varachha.

Built with **MongoDB, Express.js, React, and Node.js (MERN)** with clean, modular, and beginner-friendly code.

---

## 🍽️ About Hotel Amiras
- **Cuisine**: Punjabi, North Indian, and Indo-Chinese (100% Pure Veg & Jain Friendly)
- **Signature Dishes**: Paneer Tikka Masala, Tandoori Butter Naan, Dal Makhani, Veg Crispy, Kaju Curry, Sizzling Chocolate Brownie, Surti Masala Chaas
- **Location**: Galaxy Point, Surat - Kamrej Hwy, Bhagavan Nagar, Sarthana Jakat Naka, Sarthi Society, Nana Varachha, Surat, Gujarat 395013
- **Phone**: +91 99252 64407
- **Timings**: 10:30 AM – 11:00 PM (Daily, Mon–Sun)
- **Average Cost**: Approximately ₹400 for two people
- **Rating**: 4.4 / 5.0 (Based on 2,400+ reviews)

---

## ✨ Features

1. **Brand Hero & Navigation**:
   - Live kitchen status badge (*Kitchen Open Now* / *10:30 AM - 11:00 PM*).
   - One-tap phone dialer (`tel:+919925264407`).
   - Quick table reservation trigger & cart badge.

2. **Interactive Menu & Filtering**:
   - 28+ authentic vegetarian items across 7 categories:
     - *Punjabi & North Indian*
     - *Indo-Chinese*
     - *Tandoor & Starters*
     - *Breads & Rotis*
     - *Rice & Biryani*
     - *Desserts & Sweets*
     - *Beverages & Chaas*
   - Live search by dish name, description, or category.
   - **Jain-Friendly filter** toggle (essential for Surat dining).
   - Dietary badges (Pure Veg green badge, Spicy flame, Bestseller ribbon).

3. **Takeaway Cart & Instant Order Placement**:
   - Slide-over order drawer with item counter.
   - Takeaway / Self-Pickup vs Dine-in Pre-order selection.
   - Subtotal, 5% GST, and packaging calculation.
   - Order confirmation with auto-generated order reference (e.g. `AMI-6264`).

4. **Table Reservation System**:
   - Book tables for lunch or dinner with party size (1–30 guests).
   - Seating preferences: *AC Dining Hall*, *Family Section*, *Banquet Hall*.
   - Instant booking confirmation without booking fees.

5. **Customer Reviews & Testimonials**:
   - Google rating display (4.4★ from 2,400+ reviews).
   - Interactive "Write a Review" modal with star rating and dish recommendation.

6. **Location, Directions & Banquet Inquiries**:
   - Embedded Google Map view of Galaxy Point on Kamrej Highway.
   - Direct Google Maps routing link.
   - Complete 7-day schedule breakdown.
   - Quick inquiry form for family gatherings and parties.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose (with automated graceful in-memory fallback if MongoDB daemon is not running)
- **Orchestration**: Concurrently for running both server and client together

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm run install-all
```
*(Or run `npm install` in the root, `cd server && npm install`, and `cd client && npm install`)*

### 2. Start Frontend and Backend Concurrently
From the project root:
```bash
npm run dev
```

- **Client App**: [http://localhost:3000](http://localhost:3000)
- **API Server**: [http://localhost:5001](http://localhost:5001)

### 3. Run Separately (Optional)
To run the server alone:
```bash
cd server
npm run dev
```

To run the client alone:
```bash
cd client
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health & database connection status |
| `GET` | `/api/menu` | List dishes (supports `?category=...`, `?search=...`, `?jain=true`) |
| `GET` | `/api/menu/categories` | List available menu categories |
| `GET` | `/api/menu/info` | Restaurant contact, address, and timings |
| `POST` | `/api/reservations` | Reserve a table |
| `GET` | `/api/reservations` | List table reservations |
| `POST` | `/api/orders` | Place takeaway / pre-order |
| `GET` | `/api/orders` | List takeaway orders |
| `GET` | `/api/reviews` | List customer reviews |
| `POST` | `/api/reviews` | Submit new dining review |

---

## 📂 Project Structure
```
Amiras-website/
├── package.json              # Root script orchestration (concurrently)
├── README.md                 # Documentation
├── server/                   # Node.js + Express Backend
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── server.js         # Express app entry & auto-seeder
│       ├── models/           # Mongoose schemas (MenuItem, Reservation, Order, Review)
│       ├── routes/           # REST API routes
│       └── data/             # Seed data & in-memory fallback store
└── client/                   # Vite + React Frontend
    ├── package.json
    ├── vite.config.js        # Port 3000 & API proxy configuration
    ├── tailwind.config.js    # Warm luxury Indian dining theme
    ├── index.html            # Favicon, title, and typography
    └── src/
        ├── App.jsx           # Main stateful application
        ├── index.css         # Global styling & veg badges
        ├── components/       # Reusable responsive UI components
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── Highlights.jsx
        │   ├── MenuSection.jsx
        │   ├── CartDrawer.jsx
        │   ├── ReservationModal.jsx
        │   ├── AboutSection.jsx
        │   ├── ReviewsSection.jsx
        │   ├── ContactSection.jsx
        │   └── Footer.jsx
        └── services/
            └── api.js        # API service with failover
```

