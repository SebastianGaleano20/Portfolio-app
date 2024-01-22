import { Certificado} from "./Certificado"
import "./Certificaciones.css"
export function Certificaciones () {
    return (
        <div className="container-certf">
        <h1>Certificaciones Academicas</h1>
            <h4>Haz click para mas informacion</h4>
        <div className="cont-titulos">
            <Certificado />
        </div>
        </div>
    )

}