import React from 'react'
import { MovieItem } from './MovieItem';

export const Movies = ({results, openDetails}) => {
  
    return (
      <div className="card-deck">
        {results.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} openDetails={openDetails}/>
        ))}
      </div>
    );
}
