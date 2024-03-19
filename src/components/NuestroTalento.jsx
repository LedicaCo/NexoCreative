import "../assets/css/nuestro-talento.css";
import LeonardoPerfil from "../../public/photo-leonardo-diaz.png";
import FelipePerfil from "../../public/photo-felipe-alarcon.jpg";

const NuestroTalento = () => {
  return (
    <>
      <div className="ne-title" id="nuestro-talento">
        <span>Nuestra Talento</span>
      </div>
      <article className="nt-container" >
        <div className="nt-devs">
          <div className="nt-dev">
            <img className="nt-photo-perfil" src={LeonardoPerfil} alt="" />
            <div className="nt-info-perfil">
              <span>Leonardo Diaz Castrillon</span>
              <span>Full Stack Web Developer</span>
              <span>Founder of Nexo Creative S.A.S.</span>
              <span>Since 2022</span>
            </div>
          </div>
          <div className="nt-dev">
            <img className="nt-photo-perfil" src={FelipePerfil} alt="" />
            <div className="nt-info-perfil">
              <span>Felipe Alarcón Granada </span>
              <span>Full Stack Web Developer</span>
              <span>Co Work Nexo Creative S.A.S.</span>
              <span>Since 2024</span>
            </div>
          </div>
          <div className="nt-dev">
            <img className="nt-photo-perfil" src={LeonardoPerfil} alt="" />
            <div className="nt-info-perfil">
              <span>Leonardo Diaz Castrillon</span>
              <span>Digital Project Manager</span>
              <span>Co Work Nexo Creative S.A.S.</span>
              <span>Since 2024</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NuestroTalento;
