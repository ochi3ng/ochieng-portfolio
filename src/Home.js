import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
function Home() {
  return (
   <div>
          <div className='homepage'>
              <Navbar />
              <h3>HI, MY NAME IS JOHN OCHIENG AND</h3>
              <h2>I`M A FRONTEND DEVELOPER</h2>
              
          </div>
          <Portfolio />
   </div>
  )
}

export default Home
