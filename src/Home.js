import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Footer from './Footer'
function Home() {
  return (
   <div>
          <div className='homepage'>
              <Navbar />
              <h3>HI, MY NAME IS JOHN OCHIENG AND</h3>
              <div className='homedetails'>I`M A FRONTEND DEVELOPER</div>
              
          </div>
          <Portfolio />
          <Footer/>
   </div>
  )
}

export default Home
