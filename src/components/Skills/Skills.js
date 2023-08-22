import uniqid from 'uniqid'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const { ref, inView } = useInView()

  useEffect(() => {}, [inView])

  return (
    <>
      <div ref={ref} className='section-container'>
        <section className='section skills' id='skills'>
          <div className='section__title__two'>
            <p>02</p>
          </div>
          <h2 className='section__title'>Skills</h2>
          <ul className='skills__list'>
            {skills.map((skill) => (
              <motion.li
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                viewport={{ once: true }}
                key={uniqid()}
                className='skills__list-item btn btn--plain'
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
        <div className='purple'> </div>
      </div>
    </>
  )
}

export default Skills
