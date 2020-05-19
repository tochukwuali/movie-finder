import React from 'react'

export const MovieItem = ({movie}) => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <h4>{movie.year}</h4>
        <p>{movie.rating}</p>
        <p>{movie.genre}</p>
        <img src={movie.imgUrl} alt="" />
      </div>
    );
}
