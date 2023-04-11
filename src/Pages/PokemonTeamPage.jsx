import { useContext } from 'react';
import { TeamContext } from '../components/TeamContext';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonTeamPage = () => {
    const { caughtPokemon } = useContext(TeamContext);

    return (
        <>
            <h2>Your Team: </h2>
            <div className="team">
                {caughtPokemon.map((pokemon) => (
                    <div className="team-member">
                        <PokemonCard data={pokemon} />
                    </div>
                ))}
            </div>
        </>
    );
};
