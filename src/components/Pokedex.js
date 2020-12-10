import { useState, useEffect } from 'react'
import Axios from 'axios'

function Pokedex(){
    //use useStae to hande the pokemonName and Image
    const[pokemonName, setPokemonName] = useState('pikachu')
    const[pokemonImage, setPokemonImage] = useState('')

    //does the samething as component did mount and component did update
    useEffect(() => {
        console.log('hi from useEffect');
    
        if (pokemonName === '') {
          return
        }
    
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
          setPokemonImage(res.data.sprites.front_default)
        }).catch((err) => {
          setPokemonImage('')
        })
      })
    
      return(
        <div>
          <h1>Fishcher-Price My First Pokedex</h1>
          <input value={pokemonName} onChange={(e) => {setPokemonName(e.target.value.toLowerCase())}} />
          <img src={pokemonImage}/>
        </div>
      )
    }


export default Pokedex;