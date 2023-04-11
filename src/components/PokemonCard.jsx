import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import capFirstLetter from '../utilities';

export const PokemonCard = (props) => {
    const navigate = useNavigate();

    const addOrDropPokemonToMyTeam = () => {};

    const pickBackGroundColor = () => {
        const colorAssigner = {
            grass: 'green',
            fire: 'red',
            electric: 'yellow',
            ground: 'brown',
            rock: 'brown',
            water: 'blue',
            psychic: 'purple',
            poison: 'purple',
            dragon: 'silver',
            steel: 'silver',
            flying: 'cyan',
            ice: 'cyan',
            normal: 'gray',
            bug: 'lime',
        };
    };

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <Card className="card" border="dark" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{capFirstLetter(props.data.name)}</Card.Title>
                <Card.Img
                    variant="top"
                    src={props.data.sprites.front_default}
                />
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button
                    className="card-button"
                    variant="primary"
                    onClick={navigateHome}
                >
                    Home
                </Button>
                <Button className="card-button" variant="primary">
                    Catch / Release
                </Button>
            </Card.Body>
        </Card>
    );
};
