/* Detalles del producto */

// Estilos
import './Product.css';

// Hooks
import { useParams } from "react-router-dom";

// Funciones
import { useFetchAPI } from '../components/functions/useFetchAPI';

// Elementos
import Return from "../components/elements/Return";

export default function Product(){

    const {productId} = useParams();

    const {books, loading , error} = useFetchAPI(
        `https://6738bb254eb22e24fca8cde6.mockapi.io/argentinianbooks/${productId}`
    );

    return (
        <main className='product_main'>
        {error && <h1 className="load_message" >Error: {error} </h1> }
        {loading && <h1 className="load_message" >Cargando...</h1> }
            
            <div className="product_details">
            <img className="product_image" src={books.image} alt={books.title}></img>
            <h2 className="product_h2">PRODUCTO {productId}</h2>
            <h3 className="product_h3">Nombre: {books.title}</h3>
            <h3 className="product_h3">Autor: {books.author}</h3>
            <h3 className="product_h3">Género: {books.genre}</h3>
            <h3 className="product_h3_description">Descripción: {books.description}</h3>
            <h3 className="product_h3">Editorial: {books.publisher}</h3>
            <h3 className="product_h3">Lenguaje: {books.language}</h3>
            <h3 className="product_h3">Número de páginas: {books.print_length}</h3>
            <h3 className="product_h3">Fecha de publicación: {books.publication_date}</h3>
            <h3 className="product_h3">Dimensiones: {books.dimensions} </h3>
            <h3 className="product_h3">Precio: ${books.price}</h3>
            <h3 className="product_h3">Número de referencia único: {books.sku}</h3>
            <h3 className="product_h3">Stock: {books.stock}</h3>

            <Return />
            
            </div>
        </main>
    )
}


