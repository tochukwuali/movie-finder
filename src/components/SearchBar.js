import React from 'react'

const SearchBar = ({handleInput}) => {
    return (
        <div className="search-container">
            <input type="search" className="search" id="search" placeholder="Search Movie..." onChange={handleInput}/>
        </div>
    )
}

export default SearchBar
