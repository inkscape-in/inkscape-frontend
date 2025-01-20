import React from 'react'
import Navbar from '../components/Navbar'
// import ErrorImage from '../assets/Error-404.png'
import ErrorVideo from '../assets/errorVideo-404.mp4'
import Footer from '../components/Footer'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      {/* <div className="flex-grow flex justify-center items-center">
        <img src={ErrorImage} alt="404 Error" className="max-w-full h-1/6" />
      </div> */}
      <div className="flex-grow flex bg-white  justify-center items-center bg-gray-900">
        <video
          src={ErrorVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-2xl"
          style={{ borderRadius: "8px" }}
        />
      </div>
      <Footer/>
    </div>

  )
}

export default PageNotFound