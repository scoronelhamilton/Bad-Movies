import React from 'react';

const MovieEntry = function({movie}) {
  console.log(movie)
  return (
    <li className="movie_item">
          <img src={movie.posterPath} />
          <div className="movie_description">
            <h2>{movie.title}</h2>
            <section className="movie_details">
              <div className="movie_year">
                <span className="title">Year</span>
                <span>{movie.year}</span>
              </div>
              <div className="movie_rating">
                <span className="title">Rating</span>
                <span>{movie.rating}</span>
              </div>
            </section>
          </div>
    </li>
  )
}

export default MovieEntry;

