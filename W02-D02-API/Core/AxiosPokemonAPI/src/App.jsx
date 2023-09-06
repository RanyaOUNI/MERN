import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon,setPokemon] = useState([])
  const axiosAPI=() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      console.log("AXIOS RESPONSE :",response.data.results)
      setPokemon(response.data.results)
    })
    .catch(error => console.log(error))

  }

  return (
    <>
    <fieldset>
        <h1>PokemonAPI</h1>
        <button onClick={axiosAPI}>Axios Pokemon API</button>
        {/* {JSON.stringify(Pokemon)} */}
        <fieldset>
        <legend>Pokemon Names</legend>
        <ul>
          {pokemon.map((pokemon,idx) => 
            <li key={idx}>{pokemon.name}</li>
          )}
          </ul>
        
        </fieldset>

    </fieldset>
      
    </>
  )
}

export default App
