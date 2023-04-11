import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import capFirstLetter from '../utilities';

export const getPokemon = async () => {
    let response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=30'
    );
    return response.data.results;
};

export const HomePage = () => {
    const myPokemon = useLoaderData();

    return (
        <ol>
            <h2>Home</h2>
            {myPokemon.map((pokemon, idx) => (
                <li key={idx}>
                    <Link to={`/pokemon/${pokemon.name}/`}>
                        {capFirstLetter(pokemon.name)}
                    </Link>
                </li>
            ))}
        </ol>
    );
};
