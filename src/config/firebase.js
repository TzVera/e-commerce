import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración Firebase 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Inicializar Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

// Agregado de nuevo libro a FireStore
const addBook = async (book) => {
    try {
        const docBookRef = await addDoc(collection(db,"argentinianbooks"),book);
        console.log("Documento escrito con id:",docBookRef.id);
    } catch (error){
        console.error("Error agregando el documento",error)
    }
}

// Fetch libros desde MockApi
fetch ('https://6738bb254eb22e24fca8cde6.mockapi.io/argentinianbooks')
    .then (res => res.json())
    .then ((books) => {
            
        books.forEach((book) => {
            addBook(book);                
        });
    })
    .catch ((error) => {
         console.error("Error en fetching de datos",error)
    });

export {auth, db};