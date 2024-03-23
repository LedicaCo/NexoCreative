import "../assets/css/galeria.css";
import DemoLagsi from "../../public/lagsi.png";
import DemoNexo from '../../public/nexo.png';
import ImagenVacia from '../../public/imagen-vacia.png';

const Galeria = () => {
  return (
    <>
      <article className="collage-content">
        <div className="collage-item">
          <img className="demo-image" src={DemoNexo} alt="" />
          <div className="btn-content">
            <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={DemoLagsi} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
        <div className="collage-item">
          <img className="demo-image" src={ImagenVacia} alt="" />
          <div className="btn-content">
          <a href="#" className="btn-nexo">Visitar sitio</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Galeria;
