import '../assets/css/nuestro-trabajo.css'
import Galeria from './Galeria'


const NuestroTrabajo = () => {
  return (
    <>
    <div className="our-work-title" id="nuestro-trabajo">
        <span>Nuestro Trabajo</span>
      </div>
      <article className='our-work-container'>
      <Galeria />
      </article>
    </>
  )
}

export default NuestroTrabajo