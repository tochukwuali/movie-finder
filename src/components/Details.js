import React from 'react'

const Details = ({selected, closeDetails}) => {
    return (
      <section className="details">
        <div className="content">
          <button onClick={closeDetails}>Go back</button>
          <h2>{selected.Title}</h2>
          <p>{selected.Year}</p>
          <p>Rating: {selected.imdbRating}</p>
          <div className="image">
              <img src={selected.Poster} alt=""/>
              <div className="overview">
                  {selected.Plot}
              </div>
          </div>
        </div>
      </section>
    );
}

export default Details
