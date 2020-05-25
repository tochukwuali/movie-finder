import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Movies } from './components/Movies'
import Details from './components/Details'
import NotFound from './components/NotFound'

export function App() {
  const initialState = {
    search:  '',
    results: [],
    selected: {},
  }

  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
  
  const handleInput = (e) => {
    let search = e.target.value

    setState(prevState => {
      return {
        ...prevState, search: search
      }
    })
  }

  const validate = () => {
    let error = ''

    if(!state.search) {
      error = 'Name cannot be blank'
    }
    if (error) {
      setError(error) 
      return false
    }
    return true
  }

  const handleSearch = (e) => { 
    e.preventDefault();

    const isValid = validate()

    if (isValid) {
      axios(REACT_APP_KEY + "&s=" + state.search).then(({ data }) => {
        let results = data.Search;
        console.log(results);
        setState(prevState => {
          return {
            ...prevState,
            results: results
          };
        });
        setError("");
      });  
    }    
  }

  const openDetails = id => {
    axios(process.env.REACT_APP_KEY + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return {
          ...prevState,
          selected: result
        };
      });
    });
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
          <SearchBar handleInput = {handleInput} handleSearch={handleSearch} error={error}/>
          {(typeof state.results != 'undefined') ? <Movies results = {state.results} openDetails={openDetails}/> : <NotFound />}  
           
          {(typeof state.selected.Title != 'undefined') ? <Details selected={state.selected} closeDetails={closeDetails}/> : false}
        </main>
      </div>
    );  
}
