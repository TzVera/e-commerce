/* Registro */

// Estilos
import './Form.css';

// Hooks
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

// Elementos
import { Link, useNavigate } from 'react-router-dom';

// Firebase 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Register(){

    // Uso hook useContext
    const context = useContext(UserContext)
    const {loading, setLoading} = context

    // Navigate
    const navigate = useNavigate()

    // Estado inicial del usuario
    const initUser = {
        forename : "",
        surname : "",
        email : "",
        password : "",
        role : "user",
    }

    const [userRegister, setUserRegister] = useState(initUser)

    // Función registro usuario
    const registerUser = async () => {

        setLoading(true)

        try {
            const users = await createUserWithEmailAndPassword(auth, userRegister.email, userRegister.password)

            // Creación del objeto usuario
            const user = {
                forename: userRegister.forename,
                surname: userRegister.surname,
                email: users.user.email,
                role: userRegister.role,
                uid: users.user.uid,
            }

            // Referencia del usuario utilizando firebase
            const userRef = collection(db, "user")

            // Agregar valores del usuario a FireStore Database
            addDoc(userRef, user);

            // Setear valores del usuario
            setUserRegister({
                name: "",
                surname: "",
                email: "",
                password: "",
            })

            // Aviso de registro exitoso
            alert("Usuario registrado correctamente")

            // Redirección a login
            setLoading(false)
            navigate('/login')

        } catch (error) {
            console.error("Error:", error)
            console.log(error)
            setLoading(false)
        }
    }

    // Funciones handle
    const handleForename = (e) => {
        setUserRegister({
            ... userRegister,
            forename : e.target.value
        })
    }

    const handleSurname = (e) => {
        setUserRegister({
            ... userRegister,
            surname : e.target.value
        })
    }

    const handleEmail = (e) => {
        setUserRegister({
            ... userRegister,
            email : e.target.value
        })
    }

    const handlePassword = (e) => {
        setUserRegister({
            ... userRegister,
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
                <legend className='form_legend'>Registro</legend>
                <label className='form_label'>
                    Nombre
                    <input type="text" value={userRegister.forename} onChange={handleForename} maxLength={50} required></input>
                </label>
                
                <label className='form_label'>
                    Apellido
                    <input type="text" value={userRegister.surname} onChange={handleSurname} maxLength={50} required></input>
                </label> 
                
                <label className='form_label'>
                    Email
                    <input type="email" value={userRegister.email} onChange={handleEmail} required></input>
                </label>
                
                <label className='form_label'>
                    Contraseña
                    <input type="password" value={userRegister.password} onChange={handlePassword} required></input>
                </label>

                <button type='button' onClick={registerUser} className="button_submit">Enviar</button>
            </fieldset>
        </form>
        
        <Link className='form_link' to="/login">Login</Link>
        </div>}
        </main>
    )
}