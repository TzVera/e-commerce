/* Registro */

// Estilos
import './Form.css';

// Hooks
import { useState } from 'react';

// Funciones
import { handleSubmit } from '../components/functions/handleSubmit';

// Elementos
import { Link } from 'react-router-dom';

export default function Register(){

    return (
        <main className='form_main'>
        <div className='form_container'>
        <form onSubmit={handleSubmit} className="form_data">
            <fieldset className='form_fieldset'>
                <legend className='form_legend'>Registro</legend>
                
                <label className='form_label'>
                    Nombre
                    <input type="text" id="forename" name="forename" maxLength={50} required></input>
                </label>
                
                <label className='form_label'>
                    Apellido
                    <input type="text" id="surname" name="surname" maxLength={50} required></input>
                </label>
                
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
        
        <Link className='form_link' to="/login">Login</Link>
        </div>
        </main>
    )
}