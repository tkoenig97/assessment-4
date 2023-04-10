import { useParams } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonPage = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
            <PokemonCard />
        </div>
    );
};
