import React from 'react'

const SearchBar = ({handleInput, handleSearch, error}) => {
    return (
        <div className="search-container">
            <form onSubmit={handleSearch}>
                <input type="search" 
                    className="search" 
                    id="search" 
                    placeholder="Search Movie..." 
                    onChange={handleInput}                    
                />
            <input type="submit" value="->" />
            <div style={{color: 'red', fontSize: 12}}>
                {error}
            </div>
            </form>
        </div>
    )
}

export default SearchBar
