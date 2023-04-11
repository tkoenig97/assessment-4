import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import capFirstLetter from '../utilities';

export const PokemonCard = (props) => {
    const navigate = useNavigate();

    const addOrDropPokemonToMyTeam = () => {};

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
