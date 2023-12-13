import React from 'react'
import Image from 'next/image'
import dataengineer from '../public/Data Engineer Cover.webp'
const DataEngineer = () => {
  return (
    <div>
      <Image className='data-image' src={dataengineer}/>
    </div>
  )
}

export default DataEngineer
