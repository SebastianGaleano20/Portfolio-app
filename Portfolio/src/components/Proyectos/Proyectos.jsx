import p1 from "../../assets/p1.png"
import "./Proyectos.css"
export function Proyectos () {
    return (
        <div className="cont-txt-proyect">
            <h1>Proyectos</h1>
            <div className="cont-proyect">
                <h1>Proyecto UTN Final</h1>
                <p>App final realizada con express y ReactJS realizando una API manualmente y lanzado a internet.</p>
              <a href="https://app-utn-final.vercel.app/" target="blank"><img src={p1} alt="imagen proyect" /></a>
            </div>
        </div>
    )
}