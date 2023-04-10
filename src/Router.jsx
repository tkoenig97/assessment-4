import { createBrowserRouter } from 'react-router-dom'
import { HomePage, getPokemon } from './Pages/HomePage';
import { PokemonPage, getPokemonDetails } from './Pages/PokemonPage';
import { PokemonTeamPage } from './Pages/PokemonTeamPage';
import App from './App'

const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: getPokemon
            },
            {
                path: '/team',
                element: <PokemonTeamPage />
            },
            {
                path: '/pokemon/:name/',
                element: <PokemonPage />,
                loader: getPokemonDetails
            }
        ]
    }
])

export default Router;