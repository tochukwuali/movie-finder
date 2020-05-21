import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Movies } from './components/Movies'

export function App() {
  const initialState = {
    search:  '',
    results: [],
    selected: {}
  }
  const [state, setState] = useState(initialState)

  const handleInput = (e) => {
    let search = e.target.value

    setState(prevState => {
      return {
        ...prevState, search: search
      }
    })

    console.log(state.search)
  }

  const handleSearch = (e) => {
    if (e.key === "Enter" ) {
      axios(apiURL + '&s' + state.search).then((data) => {
        console.log(data)
      })
    } 
  }

  const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e55f172a'
    return (
      <div className="container">
        <Header />
        <main>
          <SearchBar handleInput = {handleInput}/>
          {/* <Movies />  */}
        </main>
      </div>
    );  
}
