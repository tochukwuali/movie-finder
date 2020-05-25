import React from 'react'

const SearchBar = ({handleInput, handleSearch, error}) => {
    return (
      <div className="search-container" className="">
        <form onSubmit={handleSearch} className="row">
          <div className="col-11">
            <input
              type="search"
              className="search"
              id="search"
              placeholder="Search Movie Title..."
              onChange={handleInput}
            />
          </div>
          <div className="col-1">
            <button type="submit" className="send">
              <i className="material-icons icon-send">send</i>
            </button>
          </div>
          <div style={{ color: "red", fontSize: 12 }}>{error}</div>
        </form>
      </div>
    );
}

export default SearchBar
