import React from 'react'
import about from '../assets/s.jpg'
import { ABOUT_TEXT } from '../constants'
import { animate, motion } from 'framer-motion'


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center items-center'>
                    <motion.img
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                    className='rounded-2xl' src={about} alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center items-center'>
                    <motion.p 
                    whileInView={{opacity:1,x:0}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5}}
                    className='py-8 lg:p-0'>{ABOUT_TEXT}</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About