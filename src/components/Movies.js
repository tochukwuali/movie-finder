import React from 'react'
import { MovieItem } from './MovieItem';

export const Movies = ({results}) => {
  
    return (
      <div className="card-deck">
        {results.map((movie, i) => (
          <MovieItem key={i}movie={movie} />
        ))}
      </div>
    );
}
