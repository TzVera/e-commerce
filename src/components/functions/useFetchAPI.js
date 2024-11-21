/* Función Fetch API libros */
 
// Hooks
import { useState, useEffect } from "react";
import db from "../../config/firebase";

export function useFetchAPI(urlAPI) {
    
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const dataBase = db

    useEffect (() => {
        setLoading(true)
        fetch (urlAPI)
        .then (res => res.json())
        .then (books => {
            setLoading(false);
            setBooks(books)
        })
        .catch (error => setError(error))
    }, []);

    return { books, loading, error }
}