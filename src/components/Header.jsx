import axios from 'axios';
import { Link } from 'react-router-dom';

export const Header = () => {

    const searchForPokemon = async(pokemon) => {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return response.data.results
    }    

    return (
    <div className="header">
        <h1>POKEDEX</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/team/'}>My Team #</Link>
        <form onSubmit={searchForPokemon}>
            <input placeholder='search'></input>
            <input type='submit'></input>
        </form>
    </div>
    )
};
