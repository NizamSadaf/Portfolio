import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20 flex justify-between py-0'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-10' src={logo} alt="logoS" />
      </div>
      <div className='m-8 flex items-center justify-center text-2xl gap-4'>
        <a href="https://www.facebook.com/nizam.sadaf" target='_blank'><FaFacebook/></a>
        <a href="https://github.com/NizamSadaf" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/nizam-uddin-ahmed-web-developer/" target='_blank'><FaLinkedinIn/></a>
      </div>
    </nav>
  )
}

export default Navbar