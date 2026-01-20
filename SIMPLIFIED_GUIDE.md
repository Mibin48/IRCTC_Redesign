# 🚂 IRCTC Train Booking App - Simplified Guide

This is a **train ticket booking application** inspired by Indian Railways (IRCTC) for the Vande Bharat Express.

## 📁 Project Structure

```
App.tsx                 - Main app logic and train filtering
index.tsx              - Entry point, renders React app
types.ts               - Data type definitions
vite.config.ts         - Build configuration

components/
├── Header.tsx         - Top navigation, login/register
├── SearchForm.tsx     - Search for trains
├── TrainCard.tsx      - Display individual train details
└── Footer.tsx         - Footer with links and info

data/
└── trains.ts          - Dummy train data
```

## 🎯 How the App Works

### 1. **Home Page** (Header + Hero Section)
   - Shows the app title and features
   - Links to login/register (in Header)
   - Displays key stats

### 2. **Search Form** (SearchForm.tsx)
   User fills in:
   - **Departure Station**: Where they start (e.g., Delhi)
   - **Arrival Station**: Where they're going (e.g., Varanasi)
   - **Travel Date**: When they want to travel
   - **Class**: What type of seat (AC, Sleeper, etc.)
   - **Quota**: Who they are (General, Ladies, PWD, etc.)
   - **Options**: Flexible dates, preferences

### 3. **Filter Results** (App.tsx)
   The app filters trains based on:
   - **Route**: From → To
   - **Class**: Selected compartment type
   - **Time Slot**: Morning/Afternoon/Evening/Night
   - **Sort**: By duration, price, or departure time

### 4. **Train Cards** (TrainCard.tsx)
   Shows for each train:
   - Train number and name
   - Departure and arrival times
   - Journey duration
   - Available seats and prices
   - Option to book seats

### 5. **Booking** 
   - User selects seats (max 6)
   - Confirms booking
   - Gets a success message

---

## 📊 Data Types (types.ts)

### TrainClass
Types of train compartments:
- `SL` - Sleeper class (basic, no AC)
- `2A`, `3A` - AC compartments (2-tier or 3-tier)
- `1A` - AC First Class (premium)
- `CC`, `EC` - Chair cars (sitting only)
- `VBC`, `VBE` - Vande Bharat premium classes

### Quota
Who can book:
- `GENERAL` - Anyone
- `LADIES` - Women only
- `LOWER_BERTH` - Seniors/Disabled
- `TATKAL` - Last-minute booking
- etc.

### Train Interface
Each train has:
```
{
  id: string              - Unique ID
  number: string          - Train number (e.g., "12001")
  name: string            - Train name (e.g., "VANDE BHARAT EXPRESS")
  from: string            - Starting station name
  to: string              - Ending station name
  departure: string       - Time (e.g., "09:00")
  arrival: string         - Time (e.g., "15:30")
  duration: string        - Journey time (e.g., "6h 30m")
  runsOn: string[]        - Days (M,T,W,T,F,S,S)
  classes: Availability[] - Available seat types
  amenities: string[]     - Features (WiFi, Food, etc.)
}
```

### Availability Interface
For each train class:
```
{
  class: TrainClass       - Type of compartment
  status: string          - "AVAILABLE-0045" (seats available)
  fare: number            - Price in rupees
  lastUpdated: string     - When info was last updated
  type: 'green'|'yellow'|'red'  
         - green=many available, 
         - yellow=few available, 
         - red=sold out
}
```

---

## 🔧 Main Functions

### App.tsx

#### `getFilteredTrains()`
This is the **heart** of the app. It:
1. Starts with all trains
2. Filters by route (from → to)
3. Filters by class (AC, Sleeper, etc.)
4. Filters by time (morning/evening)
5. Sorts by duration/price/departure time
6. Returns filtered list

#### `toggleClass()`, `toggleTimeSlot()`
Simple functions to add/remove filters

#### `resetFilters()`
Clears all selected filters

---

### SearchForm.tsx

#### `handleSearch()`
When user clicks search:
1. Show loading spinner (1.5 seconds)
2. Collect search parameters
3. Pass to parent component (App.tsx)
4. Show success message

---

### TrainCard.tsx

#### `handleCheckFare()`
Check available prices for a train

#### `toggleSeat()`, `confirmBooking()`
Select seats (max 6) and complete booking

---

## 🎨 Design Pattern

- **Glassmorphism**: Frosted glass effect backgrounds
- **Neon colors**: Cyan (#00F2FF), Orange (#FF9933)
- **Dark theme**: Dark background with colored text
- **Icons**: From lucide-react library

---

## ⚙️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **Vite** - Fast build tool

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Understanding the Flow

1. User opens app → **Header** shows
2. User sees hero section with stats
3. User fills **SearchForm** with details
4. Clicks "Search" → triggers filter
5. **getFilteredTrains()** filters trains
6. Results show as **TrainCards**
7. User clicks "Check Fare" or "Select Seats"
8. User books seats → success message

---

## 💡 Common Terms Explained

- **Station Code**: Short abbreviation (NDLS=Delhi, BSB=Varanasi)
- **Quota**: Rules for who can book this ticket
- **Berth**: A bed in sleeper class
- **Seat**: A chair in AC/other classes
- **TATKAL**: Rush booking (higher price, last-minute)
- **PNR**: Passenger Name Record (booking confirmation)

---

## 🐛 Debugging Tips

All console logs are prefixed with emojis:
- 🔍 Search parameters
- 💰 Fare checking
- 🎫 Booking confirmation

Open browser DevTools (F12) to see these logs!
