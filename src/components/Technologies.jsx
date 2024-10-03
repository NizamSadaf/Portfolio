import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb"
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import { BiLogoTailwindCss } from "react-icons/bi";
const Technologies = () => {
    const upDown=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[-10,10],
            transition:{
                duration:duration,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{y:0,opacity:1}}
        initial={{y:-100,opacity:0}}
        transition={{duration:0.5,delay:0.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:0.5, delay:0.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={upDown(1.5)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div> 
            <motion.div 
            variants={upDown(2)}
            initial="initial"
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div> 
            <motion.div 
            variants={upDown(2.5)}
            initial="initial"
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-400'/>
            </motion.div>  
            <motion.div 
            variants={upDown(3)}
            initial="initial"
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandMongodb className='text-7xl text-green-500'/>
            </motion.div> 
            <motion.div 
            variants={upDown(2.7)}
            initial="initial"
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTailwindCss className='text-7xl text-sky-400'/>
            </motion.div>
            <motion.div 
            variants={upDown(3.5)}
            initial="initial"
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div> 
        </motion.div>
    </div>
  )
}

export default Technologies