import { useRef } from "react";
import emailjs from "../../../node_modules/@emailjs/browser";
import "./Contacto.css";
export function Contacto() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2a4ft7m",
        "template_9oqvka8",
        form.current,
        "5gR_XKm_VYF63Dk02"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Mensaje enviado');
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contacto">
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Enviar mensaje :</h2>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Telefono</label>
          <input type="text" name="user_phone" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <input id="send" type="submit" value="Send" />
        </form>
      </div>
      <div className="cont-info">
        <ul>
          <h1>Repositorio git:</h1>
          <li>
              <a target="blank" href="https://github.com/SebastianGaleano20"><i className="fa-brands fa-github"></i>
                SebastianGaleano20
              </a>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            Sebastiangaleano.dev@gmail.com
          </li>
          <li>
            <i className="fa-solid fa-map-location-dot"></i>
            Buenos Aires, Argentina.
          </li>
        </ul>
      </div>
    </div>
  );
}
