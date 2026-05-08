
export const API_KEY = "e2a53bdc";

export const BASE_URL = "https://www.omdbapi.com";

export const POSTER_COLORS = [
  "#1a0a2e","#0a1a2e","#2e0a0a","#0a2e1a",
  "#1a2e0a","#2e1a0a","#0a2e2e","#2e0a2e",
];

export const POSTER_EMOJIS = [
  "🦇","🕷️","💫","🚀","🦁","🎭","🔫","⚔️","🌊","🤖","🏛️","💎",
];

export const MOCK_MOVIES = [
  { id: 1,  title: "The Batman",               release_date: "2022-03-04", vote_average: 7.8, poster_path: null, backdrop_path: null, overview: "When a sadistic killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption." },
  { id: 2,  title: "Spider-Man: No Way Home",  release_date: "2021-12-17", vote_average: 8.2, poster_path: null, backdrop_path: null, overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help." },
  { id: 3,  title: "Inception",                release_date: "2010-07-16", vote_average: 8.8, poster_path: null, backdrop_path: null, overview: "A thief who steals corporate secrets through dream-sharing technology." },
  { id: 4,  title: "Interstellar",             release_date: "2014-11-07", vote_average: 8.6, poster_path: null, backdrop_path: null, overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: 5,  title: "The Dark Knight",          release_date: "2008-07-18", vote_average: 9.0, poster_path: null, backdrop_path: null, overview: "When the menace known as the Joker wreaks havoc on Gotham City, Batman must accept one of the greatest tests." },
  { id: 6,  title: "Oppenheimer",              release_date: "2023-07-21", vote_average: 8.6, poster_path: null, backdrop_path: null, overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb." },
  { id: 7,  title: "John Wick: Chapter 4",     release_date: "2023-03-24", vote_average: 7.8, poster_path: null, backdrop_path: null, overview: "John Wick uncovers a path to defeating The High Table." },
  { id: 8,  title: "The Shawshank Redemption", release_date: "1994-09-23", vote_average: 9.3, poster_path: null, backdrop_path: null, overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
  { id: 9,  title: "Forrest Gump",             release_date: "1994-07-06", vote_average: 8.8, poster_path: null, backdrop_path: null, overview: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other events unfold through the perspective of an Alabama man." },
  { id: 10, title: "The Matrix",               release_date: "1999-03-31", vote_average: 8.7, poster_path: null, backdrop_path: null, overview: "A computer hacker learns from mysterious rebels about the true nature of his reality." },
  { id: 11, title: "Gladiator",                release_date: "2000-05-01", vote_average: 8.5, poster_path: null, backdrop_path: null, overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family." },
  { id: 12, title: "Avengers: Endgame",        release_date: "2019-04-26", vote_average: 8.4, poster_path: null, backdrop_path: null, overview: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos's actions." },
];

export const NAV_ITEMS = [
  { id: "home",      icon: "🏠", label: "Home"       },
  { id: "popular",   icon: "🔥", label: "Popular"    },
  { id: "toprated",  icon: "⭐", label: "Top Rated"  },
  { id: "upcoming",  icon: "📅", label: "Upcoming"   },
  { id: "favorites", icon: "❤️", label: "My Favorites" },
];

export const ENDPOINTS = {
  home:     "/movie/popular",
  popular:  "/movie/popular",
  toprated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};
