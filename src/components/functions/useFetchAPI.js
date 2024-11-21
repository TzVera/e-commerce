/* Función Fetch API libros */
 
// Hooks
import { useState, useEffect } from "react";

export function useFetchAPI(urlAPI) {
    
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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