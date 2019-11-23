const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

module.exports = {
  getSearch: (req, res) => {  
    let genreId = req.params.genre;

    apiHelpers.searchMoviesByGenre(genreId)
    .then(({data}) => {
      let moviesList = data.results;
      let movies =[];
      let count = 0;

      for (let movie of moviesList) {
        if(movie.poster_path !== null) {
          let newMovie = apiHelpers.formatData(movie);
          movies.push(newMovie);
          count++;
        }
        if( count === 25 ) {
          break;
        }
      }

      res.json(movies);
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(404);
    })
  },
  getGenres: (req, res) => {
    apiHelpers.getGenres()
    .then((response) => {
      console.log(response.data.genres)
      res.json(response.data.genres)
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(404);
    })
  },
  saveMovie: (req, res) => {
    movieModel.save(req.body)
    .then(() => {
      res.sendStatus(201)
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })

  },
  deleteMovie: (req, res) => {
    let id = parseInt(req.params.id);
    console.log(typeof id)
    movieModel.delete(id)
    .then((response) => {
      res.sendStatus(200)
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    })
  }
}