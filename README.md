# CineStream

CineStream is a modern Netflix-inspired movie discovery application built with React and OMDb API. The application allows users to browse movies, search dynamically, save favorites, and experience smooth infinite scrolling with a responsive cinematic UI.

🔗 Live Demo: *Add your deployed link here*

📸 Screenshot
![img alt](https://github.com/Harshit-700/Week-8-mission8/blob/42b937fa01035430f622f1b57057f5e35f96f7f7/Screenshot%20(429).png)

---

## 📁 Project Structure

```txt
cine-stream/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HeroBanner.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoApiBanner.jsx
│   │   ├── SearchBar.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useInfiniteScroll.js
│   │
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   │
│   ├── services/
│   │   ├── constants.js
│   │   └── omdbApi.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

---

## ✨ Features

**Netflix Inspired UI** — Cinematic modern interface with responsive layouts.

**Movie Search System** — Search movies dynamically using OMDb API.

**Infinite Scroll** — Automatically loads more movies while scrolling.

**Debounced Search** — Prevents unnecessary API calls during typing.

**Favorites System** — Save favorite movies using LocalStorage.

**Movie Cards** — Displays poster, title, release year, and rating.

**Hero Banner** — Featured movie section with immersive visuals.

**Responsive Design** — Optimized for desktop, tablet, and mobile screens.

**Reusable Components** — Structured component-based architecture.

**Smooth Animations** — Hover effects, transitions, and loading animations.

---

## 🚀 Getting Started

### 1. Create Project

```bash
npm create vite@latest cinestream
cd cinestream
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open In Browser

```txt
http://localhost:5173
```

---

## 🔑 API Setup

### OMDb API Key

Create a free API key from:

https://www.omdbapi.com/apikey.aspx

### Add API Key

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=YOUR_API_KEY
```

---

## 🧩 Sections

| Section          | Description                      |
| ---------------- | -------------------------------- |
| Home Page        | Displays trending/popular movies |
| Search Bar       | Dynamic movie searching          |
| Favorites Page   | Saved favorite movies            |
| Hero Banner      | Featured movie showcase          |
| Infinite Scroll  | Loads more movies automatically  |
| Loader Component | Loading spinner animation        |
| No API Banner    | API configuration helper         |

---

## 🎨 Design Tokens

| Property      | Value                   |
| ------------- | ----------------------- |
| Font          | Outfit / Bebas Neue     |
| Primary Color | Netflix Red             |
| Background    | Dark Cinematic Theme    |
| Card Style    | Glassmorphism + Shadows |
| Border Radius | 12px – 16px             |
| Layout        | Sidebar + Grid Layout   |

---

## 📱 Responsive Layout

| Breakpoint | Layout                         |
| ---------- | ------------------------------ |
| Desktop    | Sidebar + 6-column movie grid  |
| Tablet     | Reduced spacing & grid columns |
| Mobile     | Compact responsive layout      |

---

## ⚡ Performance Optimizations

| Optimization    | Purpose                        |
| --------------- | ------------------------------ |
| Debouncing      | Reduces excessive API requests |
| Infinite Scroll | Loads content dynamically      |
| Lazy Rendering  | Improves rendering performance |
| Reusable Hooks  | Cleaner scalable logic         |

---

## 🛠️ Built With

* React.js — Frontend library
* JavaScript (ES6+) — Application logic
* CSS3 — Styling and animations
* Vite — Development environment
* OMDb API — Movie data source
* LocalStorage — Favorites persistence

---

## 💡 Future Improvements

* Add movie details modal
* Add trailer support
* Implement authentication system
* Add genre filtering
* Add dark/light theme toggle
* Integrate TMDB API
* Add watchlist functionality

---

## 📄 License

This project is open source and available under the MIT License.
