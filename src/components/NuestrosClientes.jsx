import "../assets/css/nuestros-clientes.css";
import LogoLagsi from "../../public/logo-lagsi.png";
import LogoNexoCreative from "../../public/logo-nexo-creative.png";
import LogoExemple from "../../public/exemple-logotype.png";

const NuestrosClientes = () => {
  return (
    <>
      <div className="title-client-content" id="nuestros-clientes">
        <span className="title-client">Nuestros Clientes</span>
      </div>
      <article className="clients-content">
        <div className="logos-clients">
          <div className="client-items">
          <div className="space-client">
            <img className="image-logo" src={LogoNexoCreative} alt="" />
          </div>
          <div className="space-client">
            <img className="lagsi" src={LogoLagsi} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          <div className="space-client">
            <img className="image-logo" src={LogoExemple} alt="" />
          </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NuestrosClientes;
