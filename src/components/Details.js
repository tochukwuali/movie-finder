import React from 'react'

const Details = ({selected, closeDetails}) => {
    return (
      <section className="details">
          <div className="content row">
            <div className="col-1">
              <button onClick={closeDetails}>Go back</button>
            </div>
            <div className="image col-4">
              <img src={selected.Poster} alt="" />
            </div>
            <div className="col-5">
              <h2>{selected.Title}</h2>
              <p>{selected.Year}</p>
              <p>Rating: {selected.imdbRating}</p>
              <div className="overview">{selected.Plot}</div>
            </div>
          </div>
      </section>
    );
}

export default Details
