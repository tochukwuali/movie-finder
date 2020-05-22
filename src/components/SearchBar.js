import React from 'react'

const SearchBar = ({handleInput, handleSearch}) => {
    return (
        <div className="search-container">
            <input type="search" 
                className="search" 
                id="search" 
                placeholder="Search Movie..." 
                onChange={handleInput} 
                onKeyPress= {handleSearch}
            />
        </div>
    )
}

export default SearchBar
