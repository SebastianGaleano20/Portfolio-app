import './App.css'
import {Nav} from "./components/Nav"
import { Main } from './components/Main'
import { Certificaciones } from './components/Certificados/Certificaciones'
import { Proyectos } from './components/Proyectos/Proyectos'
function App() {
  return (
    <>
    <Nav />
    <Main/>
    <Proyectos />
    <Certificaciones />
    </>
  )
}

export default App
