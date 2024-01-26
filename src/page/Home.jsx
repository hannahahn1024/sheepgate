import React from 'react'
import NavBar from '../components/NavBar'
import WelcomeImage from '../assets/welcomeImage.png'

const Home = () => {
  return (
    <div>
      < NavBar />
      <div className='flex relative'>
        <div className=''>
          <img src={WelcomeImage} className='w-screen' alt='Welcome image'/>
        </div>
        <div className='absolute bottom-0 left-0 text-white'>
          <p>Welcome to Website</p>
        </div>
      </div>
    </div>
  )
}

export default Home