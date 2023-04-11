import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TeamContext } from './TeamContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import capFirstLetter from '../utilities';

export const PokemonCard = (props) => {
    const { caughtPokemon, setCaughtPokemon } = useContext(TeamContext);
    const navigate = useNavigate();

    const addOrDropPokemonToMyTeam = () => {
        const pokemonIndex = caughtPokemon.findIndex(
            (pokemon) => pokemon.name === props.data.name
        );

        if (pokemonIndex === -1) {
            // Pokemon is not in caughtPokemon array, add it
            if (caughtPokemon.length < 6) {
                setCaughtPokemon((prevState) => prevState.concat(props.data));
            } else {
                alert('Your team is full!');
            }
        } else {
            // Pokemon is already in caughtPokemon array, remove it
            setCaughtPokemon((prevState) =>
                prevState.filter((pokemon) => pokemon.name !== props.data.name)
            );
        }
    };

    const pickBackGroundColor = () => {
        const colorAssigner = {
            grass: 'lime',
            fire: 'orange',
            electric: 'yellow',
            ground: 'tan',
            rock: 'sienna',
            water: 'cornflowerblue',
            psychic: 'hotpink',
            poison: 'purple',
            dragon: 'blueviolet',
            steel: 'silver',
            flying: 'mediumorchid',
            ice: 'cyan',
            normal: 'burlywood',
            bug: 'olivedrab',
            fighting: 'red',
            ghost: 'darkslateblue',
            dark: 'dimgrey',
            fairy: 'lightpink',
        };

        let type = props.data.types[0].type.name;
        return colorAssigner[type];
    };

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <Card
            className="card"
            border="dark"
            style={{ width: '18rem', background: `${pickBackGroundColor()}` }}
        >
            <Card.Body>
                <Card.Title>{capFirstLetter(props.data.name)}</Card.Title>
                <Card.Img
                    className="sprite"
                    variant="top"
                    src={props.data.sprites.front_default}
                />
                <Card.Text>
                    <div className="row">
                        <div className="column">
                            {capFirstLetter(props.data.moves[0].move.name)}
                        </div>
                        <div className="column">
                            {capFirstLetter(props.data.moves[1].move.name)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            {capFirstLetter(props.data.moves[2].move.name)}
                        </div>
                        <div className="column">
                            {capFirstLetter(props.data.moves[3].move.name)}
                        </div>
                    </div>
                </Card.Text>
                <Button
                    className="card-button"
                    variant="primary"
                    onClick={navigateHome}
                >
                    Home
                </Button>
                <Button
                    className="card-button"
                    variant="primary"
                    onClick={addOrDropPokemonToMyTeam}
                >
                    Catch / Release
                </Button>
            </Card.Body>
        </Card>
    );
};
