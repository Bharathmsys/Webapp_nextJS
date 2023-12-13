import React from 'react'
import Link from 'next/link'
const Header = () => {
  
  return (
      <div className='nav-bar'  >
       <Link href="/"><h3 className='heading'>Next Js</h3></Link>
        <div className='li-element'>
       <Link href='/' ><li className='li'>Home</li></Link>
      <Link href="/About" ><li className='li'>About</li></Link>
      <Link href="/Service" > <li className='li'>Services</li></Link>
       <Link href="/Contact"><li className='li'>Contact</li></Link>
      </div>
    </div>
  )
}

export default Header
