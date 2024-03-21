import "../assets/css/nuestra-empresa.css";
import NexoOficinas from "../../public/oficina.jpg";
import logoNexoCreative from "/logo-nexo-creative.png";
import MisionImage from "../../public/mision.jpg";
import VisionImage from "../../public/vision.jpg";
import ValoresImage from "../../public/valores.jpg";

const NuestraEmpresa = () => {
  return (
    <>
      <div className="ne-title">
        <span>Nuestra Empresa</span>
      </div>
      <article className="ne-container" id="nuestra-empresa">
        <div className="ne-card">
          <div className="ne-row">
            <div className="ne-image-content">
              <h2 className="ne-card-title">Quienes somos</h2>

              <img src={NexoOficinas} alt="" />
            </div>
            <div className="ne-card-text">
              <img
                className="logo-nexo-creative"
                src={logoNexoCreative}
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet vero cum minima in sunt, qui sit natus deleniti
                aspernatur autem neque dolorum illo. Officia suscipit eveniet
                modi magnam? Impedit, rerum quidem culpa voluptatem voluptate
                cumque earum explicabo soluta unde, cum a minima, hic eius
                atque. Tempore perspiciatis voluptas quo quisquam provident
                reprehenderit nulla, nam assumenda, voluptatibus iusto doloribus
                maiores quod ipsa voluptatum quasi nihil repellat illo totam
                repellendus mollitia numquam qui consectetur corrupti officia?
                Aliquam, qui repellat. Consequatur nemo impedit ipsum aut quae
                velit voluptatibus, obcaecati id animi necessitatibus at eveniet
                repellat officia laborum fuga voluptatem!
              </p>
            </div>
          </div>
        </div>
        <div className="ne-card">
          <div className="ne-row">
            <div className="ne-image-content">
              <h2 className="ne-card-title">Misión</h2>

              <img src={MisionImage} alt="" />
            </div>
            <div className="ne-card-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet vero cum minima in sunt, qui sit natus deleniti
                aspernatur autem neque dolorum illo. Officia suscipit eveniet
                modi magnam? Impedit, rerum quidem culpa voluptatem voluptate
                cumque earum explicabo soluta unde, cum a minima, hic eius
                atque. Tempore perspiciatis voluptas quo quisquam provident
                reprehenderit nulla, nam assumenda, voluptatibus iusto doloribus
                maiores quod ipsa voluptatum quasi nihil repellat illo totam
                repellendus mollitia numquam qui consectetur corrupti officia?
                Aliquam, qui repellat. Consequatur nemo impedit ipsum aut quae
                velit voluptatibus, obcaecati id animi necessitatibus at eveniet
                repellat officia laborum fuga voluptatem!
              </p>
            </div>
          </div>
        </div>
        <div className="ne-card">
          <div className="ne-row">
            <div className="ne-image-content">
              <h2 className="ne-card-title">Visión</h2>
              <img src={VisionImage} alt="" />
            </div>
            <div className="ne-card-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet vero cum minima in sunt, qui sit natus deleniti
                aspernatur autem neque dolorum illo. Officia suscipit eveniet
                modi magnam? Impedit, rerum quidem culpa voluptatem voluptate
                cumque earum explicabo soluta unde, cum a minima, hic eius
                atque. Tempore perspiciatis voluptas quo quisquam provident
                reprehenderit nulla, nam assumenda, voluptatibus iusto doloribus
                maiores quod ipsa voluptatum quasi nihil repellat illo totam
                repellendus mollitia numquam qui consectetur corrupti officia?
                Aliquam, qui repellat. Consequatur nemo impedit ipsum aut quae
                velit voluptatibus, obcaecati id animi necessitatibus at eveniet
                repellat officia laborum fuga voluptatem!
              </p>
            </div>
          </div>
        </div>
        <div className="ne-card">
          <div className="ne-row">
            <div className="ne-image-content">
              <h2 className="ne-card-title">Valores corporativos</h2>
              <img src={ValoresImage} alt="" />
            </div>
            <div className="ne-card-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet vero cum minima in sunt, qui sit natus deleniti
                aspernatur autem neque dolorum illo. Officia suscipit eveniet
                modi magnam? Impedit, rerum quidem culpa voluptatem voluptate
                cumque earum explicabo soluta unde, cum a minima, hic eius
                atque. Tempore perspiciatis voluptas quo quisquam provident
                reprehenderit nulla, nam assumenda, voluptatibus iusto doloribus
                maiores quod ipsa voluptatum quasi nihil repellat illo totam
                repellendus mollitia numquam qui consectetur corrupti officia?
                Aliquam, qui repellat. Consequatur nemo impedit ipsum aut quae
                velit voluptatibus, obcaecati id animi necessitatibus at eveniet
                repellat officia laborum fuga voluptatem!
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NuestraEmpresa;
