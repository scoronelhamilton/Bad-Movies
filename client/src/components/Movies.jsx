import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const Movies = function({movies, showFaves}) {
  return (
    <ul className="movies">
    {
      movies.map((movie) => {
        return <li><MovieEntry key={movie.id} movie={movie} showFaves={showFaves}/></li>
      })
    }
    </ul>
  )
}

export default Movies;