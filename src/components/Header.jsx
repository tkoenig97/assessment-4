import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TeamContext } from './TeamContext';

export const Header = () => {
    const { caughtPokemon } = useContext(TeamContext)

    const [pokemonCount, setPokemonCount] = useState(caughtPokemon.length);
    const navigate = useNavigate();

    const searchForPokemon = async (pokemon) => {
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        );
        return response.data;
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        const pokemon = event.target.elements.search.value;
        const data = await searchForPokemon(pokemon);
        console.log(data);
        navigate(`/pokemon/${data.name}`);
    };

    useEffect(() => {
        setPokemonCount(caughtPokemon.length)
    }, [caughtPokemon])

    return (
        <div className="header">
            <h1>POKEDEX</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/team'}>My Team #{pokemonCount}</Link>
            <form onSubmit={handleSearch}>
                <input name="search" placeholder="Search"></input>
                <button className='submit-button' type="submit">Search</button>
            </form>
        </div>
    );
};
