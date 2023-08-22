import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './Experience.css'

const Experience = () => {
  const { ref, inView } = useInView()

  useEffect(() => {}, [inView])
  return (
    <>
      <section id='experience' className='section experience'>
        <div className='section__title__three'>
          <p>03</p>
        </div>
        <h2 className='section__title'>Experience</h2>

        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div ref={ref} className='col-md-6'>
              <h4 className='text-center pb-4'>Education</h4>
              <motion.ul
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                viewport={{ once: true }}
                className='timeline'
              >
                <li>
                  <h5 className='text-white'>
                    FULLSTACK DEVELOPER
                    <span className='float-right'>2023</span>
                  </h5>
                  <p>
                    Six months of full-time fast track education, where I choose
                    React as my specialization field. During the course, we had
                    five portfolio jobs with various tasks, everything from
                    Django, building APIs to a crud operational website with
                    React.
                  </p>
                </li>
                <li>
                  <h5 className='text-white'>
                    IT-TECHNICIAN
                    <span className='float-right'>2011 - 2013</span>
                  </h5>
                  <p>
                    Two years of education to become an IT Technician with IT
                    safety as a primary skill.
                  </p>
                </li>
              </motion.ul>
            </div>
            <div className='col-md-6'>
              <h4 className='pb-4 text-center'>Work</h4>
              <motion.ul
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                viewport={{ once: true }}
                className='timeline'
              >
                <li>
                  <div>
                    <h5 className='text-white'>
                      SUPERVISOR / OPERATOR
                      <span className='float-right'>2014 - 2022</span>
                    </h5>
                  </div>
                  <p>
                    Computer-controlled asphalt manufacturing, repairs,
                    maintenance, lead the staff during daily operations. A fun
                    and versatile role that taught me a lot.
                  </p>
                </li>
                <li>
                  <h5 className='text-white'>
                    IT-TECHNICIAN
                    <span className='float-right'>2013 - 2014</span>
                  </h5>
                  <p>
                    IT-Technician on an insurance company with focus on support
                    and daily operations. I did everything from running the
                    company&apos;s servers to supporting the users. A part of
                    the job was also system administration and being available
                    24/7 from time to time.
                  </p>
                </li>
                <li>
                  <h5 className='text-white'>
                    SUPERVISOR
                    <span className='float-right'>2008 - 2011</span>
                  </h5>
                  <p>
                    I had the role of supervisor for a team of 8, and we were
                    responsible for packing and delivering sterile equipment to
                    hospitals. The job involved managing staff, quality
                    controls, making improvements and administration.
                  </p>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Experience
