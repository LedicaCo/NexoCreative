import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/sidebar.css";
import Inicio from "./components/Inicio";
import logoNexoCreative from "/logo+nexo+creative.png";
import Dropdown from './components/Dropdown';
import NuestraEmpresa from "./components/NuestraEmpresa";
import NuestroTalento from "./components/NuestroTalento";
import NuestroTrabajo from "./components/NuestroTrabajo";

function App() {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <a href="#inicio"><img className="brand" src={logoNexoCreative} alt="" /></a>
          <ul className="navbar-items">
            <li className="navbar-item"><a className="menu-item" href="#inicio">Inicio</a></li>
            <li className="navbar-item">
              {/* Primera instancia de Dropdown */}
              <Dropdown title="Nexo Creative" items={[
                { label: "Nuestra Empresa", href: "#nuestra-empresa" },
                { label: "Nuestro Talento", href: "#nuestro-talento" },
                { label: "Nuestro Trabajo", href: "#nuestro-trabajo" },
                { label: "Nuestros Clientes", href: "#nuestros-clientes" },
                { label: "Blog", href: "#blog" },
                { label: "Desarrollo a la Medida", href: "#desarrollo-a-la-medida" }
              ].map(item => <a href={item.href} className="menu-item">{item.label}</a>)} />&nbsp;&nbsp;<i className='bx bx-caret-down'></i>
            </li>
            <li className="navbar-item">
              {/* Segunda instancia de Dropdown */}
              <Dropdown title="Desarrollos" items={[
                { label: "Control de visitantes", href: "#control-de-visitantes" },
                { label: "Control de Rondas", href: "#control-de-rondas" },
                { label: "Control de Citas Médicas", href: "#control-de-citas-medicas" },
                { label: "Comercio Electrónico", href: "#comercio-electronico" },
                { label: "Reserva de Hoteles", href: "#reserva-de-hoteles" },
                { label: "Sistema POS", href: "#sistema-pos" },
                { label: "Mantenimiento Web", href: "#mantenimiento-web" }
              ].map(item => <a href={item.href} className="menu-item">{item.label}</a>)} />&nbsp;&nbsp;<i className='bx bx-caret-down'></i>
            </li>
            <li className="navbar-item">
              {/* Tercera instancia de Dropdown */}
              <Dropdown title="Informate" items={[
                { label: "¿Que tipo de sitio Web necesita su Empresa?", href: "#tipo-sitio-web" },
                { label: "Hosting y Dominio Web", href: "#hosting-y-dominio-web" },
                { label: "SEO (Search Engine Optimization)", href: "#seo" }
              ].map(item => <a href={item.href} className="menu-item">{item.label}</a>)} />&nbsp;&nbsp;<i className='bx bx-caret-down'></i>
            </li>
            <li className="navbar-item"><a className="menu-item" href="#marketing-digital">Marketing Digital</a></li>
            <li className="navbar-item"><a className="menu-item" href="#contactenos">Contáctenos</a></li>
          </ul>          
        </div>
      </div>
      <div className="sidebar">Sidebar...</div>
      <Inicio />
      <NuestraEmpresa />
      <NuestroTalento />
      <NuestroTrabajo />
    </>
  );
}

export default App;
