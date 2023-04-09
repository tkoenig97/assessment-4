import { createBrowserRouter } from 'react-router-dom'
import { HomePage, getPokemon } from './Pages/HomePage';
import { Team } from './Pages/TeamPage';
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
            }
        ]
    }
])

export default Router;