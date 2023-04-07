import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/HomePage';
import { Team } from './Pages/TeamPage';
import App from './App'

const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/team',
                element: <Team />
            }
        ]
    }
])

export default Router;