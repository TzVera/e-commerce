/* Layout */

// Estilos
import './Layout.css';

// Elementos
import { NavLink, useNavigate } from 'react-router-dom';

export default function Layout () {

  // Parseo de datos del usuario
  const user = JSON.parse(localStorage.getItem('users'))
  
  // Navigate
  const navigate = useNavigate()

  // Funcion logout
  const logout = () => {
    localStorage.clear('users')
    navigate("/login")
  }

  return (
    <>
      <header><NavLink to="/" className="nav_link"><h1 className='h1_header'>PÁGINA ECOMMERCE DESARROLLO EN REACT JS</h1></NavLink>
      <div> 
      {!user ? <button className='button_nav_link'><NavLink className="nav_link" to="/registro">Registro</NavLink></button> : ""}
      {!user ? <button className='button_nav_link'><NavLink className="nav_link" to="/login">Login</NavLink></button> : ""}
      {user && <button className='button_nav_link' onClick={logout}><NavLink className="nav_link" to="/login">Salir</NavLink></button>}
      </div> 
      </header>
    </>
  );
}
