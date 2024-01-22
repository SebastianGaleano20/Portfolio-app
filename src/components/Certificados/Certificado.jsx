import c1 from "../../assets/C1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import "./Certificado.css";

export function Certificado() {
  return (
  <>
    <div className="cont-cert">
      <h1>Ingles IT</h1>
      <h3>Argentina Programa 4.0</h3>
      <div className="cont-img">
        <img src={c1} alt="c1" />
      </div>
    </div>
     <div className="cont-cert">
     <h1>Front-End</h1><br />
     <h3>Argentina Programa 4.0</h3>
     <div className="cont-img">
       <img src={c2} alt="c2" />
     </div>
   </div>
    <div className="cont-cert">
    <h1>ReactJS</h1>
    <h3>Argentina Programa 4.0</h3>
    <div className="cont-img">
      <img src={c3} alt="c3" />
    </div>
  </div>
  </>
  );
}
