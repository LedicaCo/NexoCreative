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
                Nexo Creative S.A.S. es una empresa especializada en el
                desarrollo de aplicaciones y sitios web con un enfoque principal
                en sistemas de seguridad, control de procesos y actividades
                comerciales. <br />
                <br /> Con sede en la ciudad de Medellín, Antioquia Colombia,
                legalamente constituida ante la Cámara de Comercio. Nuestra
                empresa se destaca por su experiencia en la utilización de
                tecnologías modernas como{" "}
                <i className="cursive">
                  HTML5, CSS3, JavaScript, React.Js, Redux.Js, React Router DOM
                  del lado del FrontEnd y Node.Js, Express.Js, Nest.Js y MySQL
                  del lado del Servidor para ofrecer soluciones innovadoras y
                  seguras.
                </i>{" "}
                <br />
                <br /> Nos enorgullecemos de nuestro compromiso con la
                excelencia técnica y el servicio al cliente, trabajando en
                estrecha colaboración con nuestros clientes para entender y
                superar sus expectativas. <br />
                <br /> Con un equipo altamente calificado y una visión centrada
                en la innovación, en Nexo Creative S.A.S. estamos preparados
                para enfrentar cualquier desafío y llevar a nuestros clientes
                hacia el éxito en el mundo digital.
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
                En Nexo Creative S.A.S., estamos comprometidos con liderar la
                transformación digital de nuestros clientes a través de
                soluciones tecnológicas de vanguardia. <br />
                <br /> Nos destacamos por desarrollar aplicaciones web
                innovadoras y brindar un servicio al cliente excepcional,
                siempre adaptándonos a las necesidades únicas de cada cliente.{" "}
                <br />
                <br /> Con el uso de tecnologías emergentes, buscamos ser un
                socio confiable que no solo resuelve problemas, sino que también
                anticipa y aborda las necesidades futuras, permitiendo así que
                personas, empresas y organizaciones alcancen su máximo potencial
                en un mundo cada vez más conectado y tecnológico.
              </p>
              {/* <p>
                En Nexo Creative S.A.S., nuestra misión es ser la fuerza motriz
                detrás de la transformación digital de nuestros clientes,
                ofreciendo soluciones tecnológicas de vanguardia que impulsen su
                crecimiento y éxito en el mundo digital. <br />
                <br /> Nos comprometemos a ser líderes en el desarrollo de
                aplicaciones web, destacándonos por nuestra innovación,
                excelencia técnica y atención inquebrantable al cliente. <br />
                <br /> Trabajamos incansablemente para entender las necesidades
                únicas de cada cliente y proporcionarles soluciones
                personalizadas y efectivas que superen sus expectativas. <br />
                <br /> Al emplear tecnologías emergentes y establecer nuevos
                estándares de calidad, nos esforzamos por ser un socio de
                confianza que no solo resuelve problemas, sino que también
                anticipa y aborda las necesidades futuras de nuestros clientes.{" "}
                <br />
                <br /> Nuestra misión es impulsar la transformación digital de
                personas, empresas y organizaciones, permitiéndoles alcanzar su
                máximo potencial en un mundo cada vez más conectado y
                tecnológico.
              </p> */}
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
                <br />
                <br /> Buscamos ser reconocidos como un punto de referencia
                indiscutible en el ámbito del desarrollo aplicaciones web por
                nuestra capacidad innovadora, por nuestra dedicación a la
                excelencia técnica y nuestra firme orientación hacia la
                satisfacción del cliente. <br />
                <br /> Este compromiso se refleja en nuestra constante búsqueda
                de tecnologías emergentes y en nuestra determinación de
                establecer nuevos estándares de calidad y eficiencia en el
                mercado. <br />
                <br /> Creemos que al elevar continuamente nuestras capacidades
                y ofrecer soluciones sobresalientes, no solo impulsamos el éxito
                de nuestra propia empresa, sino que también contribuimos al
                crecimiento y prosperidad de nuestros clientes en el ámbito
                digital.
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
                En Nexo Creative S.A.S., creemos en la importancia de mantener
                una cultura organizacional sólida basada en principios
                fundamentales que guían nuestra forma de trabajar y
                relacionarnos con nuestros clientes y colaboradores. Nuestros
                valores corporativos son: <br />
                <br />
                <ul>
                  <li>
                    <strong>Excelencia Técnica: </strong> Nos comprometemos a
                    mantener los más altos estándares de calidad en cada aspecto
                    de nuestro trabajo, desde el diseño hasta la implementación,
                    garantizando soluciones robustas y fiables.
                  </li>
                  <br />
                  <li>
                    <strong>Innovación: </strong>Buscamos constantemente nuevas
                    formas de mejorar y evolucionar, explorando tecnologías
                    emergentes y adaptándonos a las demandas cambiantes del
                    mercado.
                  </li>
                  <br />
                  <li>
                    <strong>Colaboración: </strong>Valoramos el trabajo en
                    equipo y la comunicación abierta, fomentando un ambiente
                    donde todos los miembros puedan contribuir con sus ideas y
                    habilidades únicas.
                  </li>
                  <br />
                  <li>
                    <strong>Integridad: </strong> Actuamos con honestidad,
                    transparencia y ética en todas nuestras interacciones,
                    manteniendo la confianza de nuestros clientes y socios en
                    todo momento.
                  </li>
                  <br />
                  <li>
                    <strong>Compromiso con el Cliente:</strong> Nos dedicamos a
                    comprender las necesidades y objetivos de nuestros clientes,
                    brindando soluciones personalizadas y un servicio
                    excepcional que supere sus expectativas.
                  </li>
                  <br />
                  <li>
                    <strong>Adaptabilidad: </strong> Estamos preparados para
                    enfrentar los desafíos y cambios del entorno empresarial,
                    siendo flexibles y ágiles en nuestra respuesta para
                    satisfacer las necesidades del mercado.
                  </li>
                  <br />
                </ul>
                En Nexo Creative S.A.S., estamos impulsados por nuestra pasión
                por la tecnología y el compromiso con la excelencia, trabajando
                cada día para fortalecer nuestras capacidades y ofrecer
                soluciones innovadoras que impulsen el éxito de nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NuestraEmpresa;
