import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
      <div className="about-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
      alt="about"
      className="about-img"
    />
    <h1 className="about-heading">About</h1>
    <p className="about-paragraph">
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut eut tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus too
    </p>
  </div>
  <div className='about-end-container'>
  <div className='about-end'>
    <h3>115+ <span className='span'>Expert team</span></h3>
  </div>
  <div className='about-end'>
    <h3>96% <span className='span'>Happy Clients</span></h3>
  </div>
  <div className='about-end'>
    <h3>57 <span className='span'>Award Achievement</span></h3>
  </div>
  </div>
    </div>
  )
}

export default About
