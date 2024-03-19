import '../assets/css/nuestro-trabajo.css'
import Slide3D from './Slide3D'

const NuestroTrabajo = () => {
  return (
    <>
    <div className="our-work-title" id="nuestro-trabajo">
        <span>Nuestro Trabajo</span>
      </div>
      <article className='our-work-container'>
      <Slide3D />
      </article>
    </>
  )
}

export default NuestroTrabajo