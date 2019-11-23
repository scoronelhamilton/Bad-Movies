import React from 'react';

const MovieEntry = function({movie, showFaves}) {
  return (
    <div className="movie_item">
        <div className="movie_poster">
        <img src={movie.posterPath} />
        </div>
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
    </div>
  )
}

export default MovieEntry;

