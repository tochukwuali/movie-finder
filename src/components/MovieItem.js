import React from 'react'

export const MovieItem = ({movie}) => {
    return (
      <div className="movie-card">
        <div className="card movie-card" style={{ width: "18rem" }}>
        <img src={movie.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p>{movie.year}</p> <hr />
          <h5 className="card-title">{movie.title}</h5> 
          <p className="card-text">{movie.subtitle}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}   
        </div>
        <div className="card-footer">
            <small className="text-muted">Rating: {movie.rating}</small>
          </div>
      </div>
    </div>
      
    );
}
