import img from "../../assets/info.png"
import "./Conocimientos.css"
export function Conocimientos (){
    return(
        <div className="cont-skills">
            <h1>Conocimientos y habilidades tegnologicas</h1>
           <div className="cont-leng">
            <img src={img} alt="skilss" />
           </div>
        </div>
    )
}