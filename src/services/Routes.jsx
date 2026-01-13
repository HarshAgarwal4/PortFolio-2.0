import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home.jsx';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

export default Routes;