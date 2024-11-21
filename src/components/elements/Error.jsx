/* Mensaje de error página web */

// Estilos
import './Elements.css'

// Componentes
import Return from './Return';

export default function Error() {

  return (
    <>
     <div className='error_background'>
     <div className='error_container' >
      <h1>Error: Página no encontrada</h1>
      <Return />
     </div>
     </div>
  </>
  );
}


