/* Función para volver a página principal */

// Hooks
import { useNavigate } from 'react-router-dom';

export function handleSubmit(e) {

    const navigate = useNavigate();

    e.preventDefault()
    navigate('/')
}