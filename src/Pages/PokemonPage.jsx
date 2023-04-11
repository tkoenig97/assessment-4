import { useLoaderData } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';
import { useEffect } from 'react';
import axios from 'axios';
import capFirstLetter from '../utilities';

export const getPokemonDetails = async ({ params }) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    return response.data;
};

export const PokemonPage = () => {
    const pokemonDetails = useLoaderData();

    useEffect(() => {
        console.log(pokemonDetails);
    }, [pokemonDetails]);

    return (
        <div>
            <h2>{capFirstLetter(pokemonDetails.name)}</h2>
            <PokemonCard data={pokemonDetails} />
        </div>
    );
};
