import { useLoaderData } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';
import axios from 'axios';
import { useEffect } from 'react';

export const getPokemonDetails = async({params}) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    return response.data
}

export const PokemonPage = () => {
    const pokemonDetails = useLoaderData()

    useEffect(()=> {
        console.log(pokemonDetails)
    }, [pokemonDetails])

    return (
        <div>
            <h1>{pokemonDetails.name}</h1>
            <PokemonCard />
        </div>
    );
};
