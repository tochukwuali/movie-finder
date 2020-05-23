import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Movies } from './components/Movies'
import Details from './components/Details'

export function App() {
  const initialState = {
    search:  '',
    results: [],
    selected: {}
  }

  const apiKEY = 'https://api.themoviedb.org/3/search/movie?api_key=514cbf896997aa1cae73eed55b090405&language=en-US'
  const apiURL = 'http://www.omdbapi.com/?apikey=e55f172a'

  const [state, setState] = useState(initialState)

  const handleInput = (e) => {
    let search = e.target.value

    setState(prevState => {
      return {
        ...prevState, search: search
      }
    })
  }

  const handleSearch = (e) => {
    if (e.key === "Enter" ) {
      
      axios(apiURL + "&s=" + state.search).then(( {data} ) => {
        let results = data.Search

        setState(prevState => {
          return {
            ...prevState,
            results: results
          };
        });
      });
    } 
  }

  const openDetails = id => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result)

      setState(prevState => {
        return {
          ...prevState,
          selected: result
        }
      })
    })
  }

  const closeDetails = () => {
    setState(prevState => {
      return {
        ...prevState,
        selected: {}
      }
    })
  }
    return (
      <div className="container">
        <Header />
        <main>
          <SearchBar handleInput = {handleInput} handleSearch={handleSearch}/>
          <Movies results = {state.results} openDetails={openDetails}/>

          {(typeof state.selected.Title != 'undefined') ? <Details selected={state.selected} closeDetails={closeDetails}/> : false}
        </main>
      </div>
    );  
}
