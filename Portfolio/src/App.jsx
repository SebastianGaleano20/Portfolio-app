import './App.css'
//import {Nav} from "./components/Nav"
import { Main } from './components/Main'
import { Certificaciones } from './components/Certificados/Certificaciones'
import { Proyectos } from './components/Proyectos/Proyectos'
import { Conocimientos } from './components/Conocimientos/Conocimientos'
import { Contacto } from './components/Formulario/Contacto'

function App() {
  return (
    <>
    <Main/>
    <div className='cont-middle'>
   <Proyectos />
   <Conocimientos />
    </div>
  <Certificaciones />
  <Contacto />
    </>
  )
}

export default App
