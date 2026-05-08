# 🎬 CineStream

A Netflix-inspired movie discovery app built with React + Vite.

## Features
- 🔥 Popular, Top Rated, Upcoming movies via TMDB API
- 🔍 Search with 500ms debouncing
- ♾️ Infinite scroll (no pagination buttons)
- ❤️ Favorites saved to LocalStorage
- 🎬 Hero carousel
- 📱 Responsive design

## Setup

```bash
npm install
npm run dev
```

## API Key
Open `src/constants.js` and replace:
```js
export const API_KEY = "YOUR_TMDB_API_KEY";
```
Get a free key at https://themoviedb.org → Settings → API
