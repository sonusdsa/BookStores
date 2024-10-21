import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Course from '../Components/course'
function coursess() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
   <Course/>
   </div>
   <Footer/>
   </>
  )
}

export default coursess
