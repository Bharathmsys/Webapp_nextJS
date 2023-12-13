import React from 'react'
import Image from 'next/image'
import Data from '../public/Data-Science.jpg'
const Datascience = () => {
  return (
    <div>
      <Image className='data-image' src={Data}/>
    </div>
  )
}

export default Datascience
