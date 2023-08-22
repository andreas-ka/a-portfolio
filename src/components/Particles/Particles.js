import ParticleBackground from 'react-particle-backgrounds'
import style from './Particles.css'

const Particles = () => {
  const settings = {
    particle: {
      particleCount: 35,
      color: '#fff',
      minSize: 1,
      maxSize: 4,
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000,
    },
  }

  return (
    <>
      <div className={style.Container}>
        <ParticleBackground settings={settings} />
      </div>
    </>
  )
}
export default Particles
