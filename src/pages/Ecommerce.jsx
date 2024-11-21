/* Contenido página E-Commerce */

// Estilos
import './Ecommerce.css';

// Elementos
import { Link } from "react-router-dom";

// Funciones
import { useFetchAPI } from '../components/functions/useFetchAPI';

export default function Ecommerce(){
    
    const {books, loading , error} = useFetchAPI(
        'https://6738bb254eb22e24fca8cde6.mockapi.io/argentinianbooks'
    );

    return (
        <main className='ecommerce_main'>
          <h1 className="ecommerce_h1" >ARTÍCULOS</h1>   
         
          {error && <h1 className="load_message" >Error: {error} </h1> }
          {loading && <h1 className="load_message" >Cargando...</h1> }
          
          <div className="ecommerce_list">

            {books?.map(book => (
            <div key={book.id}>
                <Link to= {`/e-commerce/${book.id}`}> 

                <div className="ecommerce_container"> 
                    <img className="ecommerce_image" src={book.image} alt={book.title}></img> 
                    
                    <div className="ecommerce_">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p> $ {book.price}</p>
                    </div> 
                </div>

                </Link>
            </div>
            ))}
          </div>
        </main>
    );
} 