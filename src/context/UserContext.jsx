/* Archivo de contextos de la aplicación  */

// Hooks
import { createContext, useState } from "react";

// Contexto del usuario
export const UserContext = createContext();

// Proveedor del contexto
export const UserContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}

