import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
         <motion.h1
          whileInView={{y:0,opacity:1}}
          initial={{y:-100,opacity:0}}
          transition={{delay:0.5}}
         className='my-20 text-center text-4xl'>Experience</motion.h1>
         <div>
         {EXPERIENCES.map((experience,index)=>(
            <div key={index} className='flex flex-wrap mb-5 lg:justify-center'>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:-100,opacity:0}}
                 transition={{delay:0.5}}
                 className='w-full lg:w-1/4'>
                    <p className='text-neutral-200 mb-3'>{experience.year}</p>
                </motion.div>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:100,opacity:0}}
                 transition={{delay:0.5}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {experience.role} - {" "}
                        <span className='text-purple-300'>
                            <a href={experience.link} target='_blank'>{experience.company}</a>
                        </span>
                    </h6>
                    <p className='mb-4 text-neutral-200'>
                        {experience.description}
                    </p>
                    {experience.technologies.map((tech,index)=>(
                        <span key={index} className='mb-2 p-2 mt-3 mr-2 bg-neutral-900 text-purple-400'>{tech}</span>
                    ))}
                </motion.div>
            </div>
         )
         )}
         </div>
    </div>
  )
}

export default Experience