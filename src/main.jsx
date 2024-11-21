/* Renderizado y rutas */

// Elementos
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes'
import { UserContextProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={Routes} />
    </UserContextProvider>
  </StrictMode>,
)
