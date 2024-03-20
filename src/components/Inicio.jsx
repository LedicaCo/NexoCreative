import "../assets/css/inicio.css";
import LogoReact from '../../public/7423887_react_react native_icon.png';
import LogoMeta from '../../public/logo-horizontal-meta.png';
const Inicio = () => {
  return (
    <>
      <div className="home-body" id="inicio"></div>
      <div className="home-banner">
        <h1>DISEÑO Y DESARROLLO  DE APLICACIONES WEB</h1>
        <p>
          En un mundo de constantes cambios su empresa necesita un sitio web de
          calidad, dinámico y orientado específicamente a sus clientes
          potenciales. Un diseño web profesional es apenas el primer paso en su
          posicionamiento digital, pero el paso más importante.
        </p>
        <p>
          Asesoramos, desarrollamos y diseñamos para empresas, emprendimientos y
          proyectos desde hace más de 3 años en el mercado colombiano. Sabemos
          cómo posicionar su marca en internet.
        </p>
        <p>Usamos React, una biblioteca de Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Meta Platform creadores de Facebook y la comunidad de software libre. </p>
        <div className="logo-meta-platform">
        <img className="logos-redes" src={LogoReact} alt="" />
        <img className="logos-redes" src={LogoMeta} alt="" />
        </div>
      </div>
    </>
  );
};

export default Inicio;
