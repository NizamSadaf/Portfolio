import React from 'react'
import {PROJECTS} from '../constants/index'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
         <motion.h1
          whileInView={{y:0,opacity:1}}
          initial={{y:-100,opacity:0}}
          transition={{delay:0.5}}
         className='my-20 text-center text-4xl'>Projects</motion.h1>
         <div>
         {PROJECTS.map((project,index)=>(
            <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:-100,opacity:0}}
                 transition={{delay:0.5}}
                 className='w-full lg:w-1/4'>
                    <a href={project.link} target='_blank'><img className='w-[10rem] h-[20rem] rounded-xl mb-2' src={project.image} alt="" /></a>
                </motion.div>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:100,opacity:0}}
                 transition={{delay:0.5}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {project.title}
                    </h6>
                    <p className='mb-4 text-neutral-200'>
                        {project.description}
                    </p>
                    {project.technologies.map((tech,index)=>(
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

export default Projects