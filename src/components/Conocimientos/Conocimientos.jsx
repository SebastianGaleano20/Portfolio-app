import img from "../../assets/info.png"
import "./Conocimientos.css"
export function Conocimientos (){
    return(
        <div className="cont-skills">
            <h2>Conocimientos y habilidades tegnologicas</h2>
           <div className="cont-leng">
            <img src={img} alt="skilss" />
           </div>
        </div>
    )
}