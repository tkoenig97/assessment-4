import { Link } from 'react-router-dom';

export const Header = () => {

    

    return (
    <div className="header">
        <h1>POKEDEX</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/team/'}>My Team #</Link>
        <form>
            <input placeholder='search'>

            </input>
        </form>
    </div>
    )
};
