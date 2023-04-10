import { Button, Card } from "react-bootstrap"

export const PokemonCard = () => {
    const addOrDropPokemonToMyTeam = () => {

    }

    const pickBackGroundColor = () => {

    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img />    
                <Card.Title>Pokemon Name</Card.Title>
                <Card.Text>Moves</Card.Text>
                <Button>Home</Button>
                <Button>Catch / Release</Button>
            </Card.Body>
        </Card>
    )
}