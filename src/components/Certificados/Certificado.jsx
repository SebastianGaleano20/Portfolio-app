import c1 from "../../assets/C1.png";
import c2 from "../../assets/C2.png";
import c3 from "../../assets/C3.png";
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
     <h1>Certificacion Front-End</h1>
     <h3>Argentina Programa 4.0</h3>
     <div className="cont-img">
       <img src={c2} alt="c1" />
     </div>
   </div>
    <div className="cont-cert">
    <h1>Certificacion ReactJS</h1>
    <h3>Argentina Programa 4.0</h3>
    <div className="cont-img">
      <img src={c3} alt="c1" />
    </div>
  </div>
  </>
  );
}