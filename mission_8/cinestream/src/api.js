import { API_KEY, BASE_URL } from "./constants";


function normalizeMovie(m) {
  return {
    id: m.imdbID,
    title: m.Title,
    release_date: m.Year ? `${m.Year}-01-01` : null,
    vote_average: m.imdbRating && m.imdbRating !== "N/A"
      ? parseFloat(m.imdbRating)
      : null,
    poster_path: null,
    poster_url: m.Poster && m.Poster !== "N/A" ? m.Poster : null,
    backdrop_path: null,
    overview: m.Plot && m.Plot !== "N/A" ? m.Plot : "",
    original_language: m.Language || null,
    genre: m.Genre || null,
    director: m.Director || null,
    actors: m.Actors || null,
    runtime: m.Runtime || null,
    rated: m.Rated || null,
  };
}
export async function searchMovies(query, page = 1) {
  const url = `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error || "Not found");
  const movies = (data.Search || []).map(normalizeMovie);
  const totalResults = parseInt(data.totalResults || "0", 10);
  const totalPages = Math.ceil(totalResults / 10);
  return { movies, totalPages, totalResults };
}
export async function getMovieDetail(imdbID) {
  const url = `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error);
  return normalizeMovie(data);
}
export const PRESET_SEARCHES = {
  home:     "avengers",
  popular:  "marvel",
  toprated: "batman",
  upcoming: "spider",
};
