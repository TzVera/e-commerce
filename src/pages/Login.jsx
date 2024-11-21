/* Login */

// Estilos
import './Form.css';

// Hooks
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

// Elementos
import { Link, useNavigate } from 'react-router-dom';

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { collection, onSnapshot, query, where, QuerySnapshot } from 'firebase/firestore';

export default function Login(){   

    // Uso hook useContext
    const context = useContext(UserContext)
    const {loading, setLoading} = context

    // Navigate
    const navigate = useNavigate()

    // Estado inicial del usuario
    const initUser = {
        email : "",
        password : "",
    }

    const [userLogin, setUserLogin] = useState(initUser)

    // Función logueado usuario 
    const loginUser = async () => {

        setLoading(true)

        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)

            try {
                // Obtener datos del usuario
                const queryCollection = query(
                    collection(db, "user"),
                    where('uid', '==', users?.user?.uid)
                )

                // Recorrido de los datos del usuario 
                const data = onSnapshot(queryCollection, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user))
                    
                    // Setear valores del usuario
                    setUserLogin({
                        email: "",
                        password: "",
                    })

                    // Aviso de logueado exitoso
                    alert("Usuario logueado correctamente")

                    // Redirección a la página principal
                    setLoading(false)
                    navigate('/')
        
                })
                return () => data
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            console.error("Error en Login:",error)
        }
    }
    

    // Funciones handle
    const handleEmail = (e) => {
        setUserLogin({
            ... userLogin,
            email : e.target.value
        })
    }

    const handlePassword = (e) => {
        setUserLogin({
            ... userLogin,
            password : e.target.value
        })
    }

    return (
        <main className='form_main'>

        {loading && <h1 className="load_message" >Cargando...</h1> }
        
        {!loading && 
        
        <div className='form_container'>
        <form className="form_data">
            <fieldset className='form_fieldset'>
                <legend className='form_legend'>Login</legend>
                
                <label className='form_label'>
                    Email
                    <input type="email" name="email" value={userLogin.email} onChange={handleEmail} required></input>
                </label>
                
                <label className='form_label'>
                    Contraseña
                    <input type="password" value={userLogin.password} onChange={handlePassword} required></input>
                </label>
                <button type="button" onClick={loginUser} className="button_submit">Enviar</button>
            </fieldset>
        </form>

        <Link className='form_link' to="/registro">Registro</Link>
        </div>}
        </main>
    )
}

