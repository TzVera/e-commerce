/* Página principal */

// Estilos
import './App.css'

// Componentes
import Layout from './components/elements/Layout'

// Elementos
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <main className='main_app'>
      <Layout />
      <Outlet />
    </main>
    </>
  )
}

export default App
