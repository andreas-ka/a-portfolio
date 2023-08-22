import { motion } from 'framer-motion'
import GitHubIcon from '@material-ui/icons/GitHub'
import ParticleBackground from 'react-particle-backgrounds'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import pdf from '../Files/Andreas-Karlsson-CV-english.pdf'

const About = () => {
  const { name, role, description, social } = about

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: '#824f9a',
      minSize: 1,
      maxSize: 4,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 2,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='about center'
    >
      <ParticleBackground
        style={{
          position: 'absolute',
          marginTop: '0px',
          marginLeft: '0px',
          top: '0',
          left: '0',
        }}
        settings={settings}
      />

      {/* Content */}
      <div className='about__content'>
        {name && (
          <h1>
            Hi, my name is <span className='about__name'>{name}.</span>
          </h1>
        )}
        {role && (
          <h2 className='about__role'>
            I&apos;m a {role}, among other things.
          </h2>
        )}
        <p className='about__desc'>{description && description}</p>
        <div className='about__contact center'>
          {/* Social links */}
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
              <a href={pdf}>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default About
