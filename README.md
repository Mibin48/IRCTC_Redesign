# 🚂 Train Ticket Booking App - Simple Guide

A modern, easy-to-use train booking application for Indian Railways Vande Bharat Express.

## What does this app do?

This is a **train ticket booking website** where users can:
1. ✅ Search for trains between two cities
2. ✅ Filter by train class, time, and price
3. ✅ See available seats and prices
4. ✅ Book seats for their journey

## 📁 Project Structure

```
├── App.tsx              → Main app with filter logic
├── index.tsx            → Start point for the app
├── types.ts             → Data type definitions
│
├── components/
│   ├── Header.tsx       → Top menu bar
│   ├── SearchForm.tsx   → Search for trains
│   ├── TrainCard.tsx    → Display train details
│   └── Footer.tsx       → Footer section
│
└── data/
    └── trains.ts        → Fake train data
```

## 🎯 Key Features

### 1. Search
- Pick starting city (e.g., Delhi)
- Pick ending city (e.g., Mumbai)
- Choose travel date
- Choose train class (AC, Sleeper, etc.)

### 2. Filter
The app automatically:
- Finds matching trains
- Filters by class
- Filters by time (morning/evening)
- Sorts by price or duration

### 3. View Trains
Shows train details:
- Train name and number
- Departure and arrival time
- Journey duration
- Available seats and prices

### 4. Book Seats
- Select seats (max 6)
- Confirm booking
- Get success message

## 🚀 How to Run

**Step 1:** Install Node.js from nodejs.org

**Step 2:** Run these commands
```bash
npm install
npm run dev
```

**Step 3:** Open browser and go to
```
http://localhost:5173
```

## 📊 Understanding Data Types

**Train Class** (types of seats):
- `SL` = Sleeper (bed, no AC)
- `2A` = AC 2-tier
- `3A` = AC 3-tier
- `1A` = AC First Class (expensive)
- `CC` = Chair Car (chairs)

**Status Colors**:
- 🟢 Green = Available
- 🟡 Yellow = Limited
- 🔴 Red = Full

## 💡 How Code Works

Main flow:
```
USER SEARCHES → 
FILTER BY ROUTE → 
FILTER BY CLASS → 
FILTER BY TIME → 
SORT RESULTS → 
SHOW TRAINS
```

## 🔍 Debug Tips

Open browser console (F12) to see:
- `🔍 Search Parameters:` → What user searched
- `💰 Checking fare for:` → Price info
- `🎫 Booking confirmed:` → Booking success

## 📖 More Details?

Read: **SIMPLIFIED_GUIDE.md** for complete documentation

---

**Happy Booking! 🎉**
