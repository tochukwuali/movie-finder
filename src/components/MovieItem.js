import React from 'react'

export const MovieItem = ({movie, openDetails}) => {
    return (
      <div className="movie-card" onClick={() => openDetails(movie.imdbID)}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            // src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            src={movie.Poster}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {movie.Title} </h5>
          </div>
        </div>
      </div>
    );
}
