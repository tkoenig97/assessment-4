import { createBrowserRouter } from 'react-router-dom'
import { HomePage, getPokemon } from './Pages/HomePage';
import { PokemonPage } from './Pages/PokemonPage';
import { Team } from './Pages/PokemonTeamPage';
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
                element: <Team />
            },
            {
                path: '/pokemon/:name/',
                element: <PokemonPage />
            }
        ]
    }
])

export default Router;