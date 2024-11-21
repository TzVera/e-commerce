/* Login */

//Estilos
import './Form.css';

// Funciones 
import { handleSubmit } from '../components/functions/handleSubmit';

// Elementos
import { Link } from 'react-router-dom';

export default function Login(){   

    return (
        <main className='form_main'>
        <div className='form_container'>
        <form onSubmit={handleSubmit} className="form_data">
            <fieldset className='form_fieldset'>
                <legend className='form_legend'>Login</legend>
                
                <label className='form_label'>
                    Email
                    <input type="email" id="email" name="email" required></input>
                </label>
                
                <label className='form_label'>
                    Contraseña
                    <input type="password" id="password" required></input>
                </label>
                <button className="button_submit">Enviar</button>
            </fieldset>
        </form>

        <Link className='form_link' to="/registro">Registro</Link>
        </div>
        </main>
    )
}

