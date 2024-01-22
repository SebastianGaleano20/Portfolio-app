import logo from "../assets/logo.jpg"
import "./Nav.css"

export function Nav (){
    return (
     <header>
     <div className="logo">
        <img src={logo} alt="logo" />
     </div>
     <nav>
        <a href="">Sobre mi</a>
        <a href="">Certificacion</a>
        <a href="">Proyectos</a>
        <a href="">Contacto</a>
     </nav>
     </header>
    )
}    