import "./Main.css";
import foto from "../assets/IMG_20230813_190934632_BURST000_COVER.jpg";

export function Main() {
  return (
    <>
      <div className="cont-sobremi">
        <div className="cont-img-sobremi">
            <img src={foto} alt="foto" />
        </div>
        <div className="cont-txt-sobremi">
          <h1>Sebastian Galeano</h1>
          <h3>Desarrolaldor FullStack</h3>
          <p>Soy Sebas, desarrollador web freelance.</p>
          <p>
            Actualmente me dedico al desarrollo web de proyectos e-commerce y
            blogs. Mi objetivo personal es poder dedicarle mi tiempo completo al
            desarrollo en una empresa o emprendimiento.
          </p>
          <p>
            Mi enfoque se encuentra en el constante aprendizaje sobre nuevas
            tegnologias y seguir ampliando mis habilidades de trabajo.
          </p>
        </div>
      </div>
    </>
  );
}
