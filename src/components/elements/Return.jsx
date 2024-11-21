/* Botón para volver atrás */

// Estilos
import './Elements.css'

// Elementos
import { useNavigate } from 'react-router-dom';

export default function Return() {

  // Navigate
  const navigate = useNavigate();

  return (
    <div>
      <button className='return' onClick= {() => navigate((-1),{ replace: true })}> Volver atrás </button> 
    </div>
  );
}
