import React from 'react'
import {CONTACT} from '../constants/index'
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
        <div className='text-2xl font-semibold'>
            <h2>Get In Touch</h2>
        </div>
        <div>
            <h5>{CONTACT.phoneNo}</h5>
        </div>
        <div>
            <h5>{CONTACT.email}</h5>
        </div>
        <div>
            <h5>{CONTACT.address}</h5>
        </div>
    </div>
  )
}

export default Footer