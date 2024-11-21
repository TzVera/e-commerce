/* Layout */

// Estilos
import './Layout.css';

// Elementos
import { NavLink } from 'react-router-dom';

export default function Layout () {

  return (
    <>
      <header><NavLink to="/" className="nav_link"><h1 className='h1_header'>PÁGINA ECOMMERCE DESARROLLO EN REACT JS</h1></NavLink>
      <div> 
      <button className='button_nav_link'><NavLink className="nav_link" to="/registro">Registro</NavLink></button>
      <button className='button_nav_link'><NavLink className="nav_link" to="/login">Login</NavLink></button>
      </div> 
      </header>
    </>
  );
}
