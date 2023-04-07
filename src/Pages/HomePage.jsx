import axios from "axios";
import { useEffect, useState } from "react";

export const getPokemon = async() => {
  let response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
  return response.data.results
}

export const Home = () => {
  const [myPokemon, setMyPokemon] = useState([])

  useEffect(()=>{
    const getThirtyPokemon = async() =>{
      const pokemon = await getPokemon()
      setMyPokemon(pokemon)
    }
    getThirtyPokemon()
  }, [])

  useEffect(()=>{
    console.log(myPokemon)
  },[myPokemon])

  return (
    <div>
      <h1>HOME</h1>
      {myPokemon.map((pokemon, idx)=>(
        <p key={idx}>{pokemon.name}</p>
      ))}
    </div>
  );
};