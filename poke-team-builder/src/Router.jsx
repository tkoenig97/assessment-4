import { createBrowserRouter } from 'react-router-dom'
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
        ]
    }
])

export default Router;