const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');


let helpers = {
  searchMoviesByGenre: (genreId) => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&release_date.gte=1960-01-01&with_genres=${genreId}`)
  },
  getGenres: () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  },
  formatData: (movie) => {
    let newMovie = {};
      newMovie.id = movie.id,
      newMovie.title = movie.title,
      newMovie.genre_ids = movie.genre_ids,
      newMovie.rating = movie.popularity,
      newMovie.year = movie.release_date.split('-')[0]
      newMovie.posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return newMovie
  }
}

module.exports = helpers;