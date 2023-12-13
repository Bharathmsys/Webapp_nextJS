import React from 'react'
import Image from 'next/image'
import Serviceimg from '../public/service-img.jpg'
const Service = () => {
  return (
    <div className='service-container'>
      <div className='service-container1' >
        <h1 className='service-title'>Our Services</h1>
        <p className='service-para'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO <br/>EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.</p>
      </div>
      <Image src={Serviceimg} />
    </div>
  )
}

export default Service
