import React from 'react'
import Image from 'next/image'
import machinelearning from '../public/machine-learning.jpg'
const MachineLearning = () => {
  return (
    <div>
      <Image className='data-image' src={machinelearning}/>
    </div>
  )
}
export default MachineLearning
