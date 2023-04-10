import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import capFirstLetter from '../utilities'

export const PokemonCard = (props) => {
    const addOrDropPokemonToMyTeam = () => {

    }

    const pickBackGroundColor = () => {

    }

    return (
        <Card className='card' border="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{capFirstLetter(props.data.name)}</Card.Title>
            <Card.Img variant="top" src={props.data.sprites.front_default} />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}