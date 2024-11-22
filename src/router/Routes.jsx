/* Rutas de la aplicación */

// Elementos
import {createBrowserRouter} from "react-router-dom"

// Componentes
import App from '../App'
import Error from '../components/elements/Error'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Ecommerce from '../pages/Ecommerce'
import Product from '../pages/Product'

const Routes = createBrowserRouter ([
   
    {
        path: "/", element: <App />, errorElement: <Error />, children: [
            { index: true, element: <Ecommerce />},
            { path: "registro", element: <Register />},
            { path: "login", element: <Login />},
            { path: "/e-commerce/:productId", element: <Product />}
        ]
    },
    
])

export default Routes
