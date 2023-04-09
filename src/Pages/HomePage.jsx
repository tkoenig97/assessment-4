import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const getPokemon = async () => {
  let response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
  return response.data.results;
};

export const HomePage = () => {
  const myPokemon = useLoaderData(getPokemon);

  return (
    <ol>
      <h2>Home</h2>
      {myPokemon.map((pokemon, idx) => (
        <li key={idx}>
          <a href={`/pokemon/${pokemon.name}/`}>{pokemon.name}</a>
        </li>
      ))}
    </ol>
  );
};
