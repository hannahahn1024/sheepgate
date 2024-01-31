import React from 'react'
import NavBar from '../components/NavBar'
import WelcomeImage from '../assets/temp.jpg'
import { Link } from "react-router-dom"

const Home = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  

  return (
    <div>
      {/* NavBar */}
      <div className='flex relative'>
        <div className=''>
          <img src={WelcomeImage} className='w-screen bg-cover bg-no-repeat' alt='Welcome Image'/>
        </div>
        <div className='absolute bottom-9 left-9 text-black text-lg pb-4 pl-6'>
          <h1 className='text-white text-5xl pb-5'>양문교회</h1>
          <Link to ="/sheepgate">
            <button className='text-white outline outline-2 backdrop-blur-md rounded-md py-3 px-3'>교회 알아보기</button>
          </Link>
        </div>
      </div>
      
      <div className='text-lg mt-6'>교회 안내</div>
      <button class="fixed bottom-4 right-4 outline outline-2 backdrop-blur-md rounded-3xl py-2 px-4 font-extrabold"
      onClick={scrollToTop}>⭡</button>
      {/* Grid images */}
      <div class ="grid grid-cols-4 gap-4">
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>교회 갤러리</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>교회 동영상</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>새가족</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>AWANA</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>아동청소년부(TEENS)</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>목장교회</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>선교지소식</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>뉴스레터</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>CBS 반가운오늘</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>Facebook</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>YouTube Sermon</h1>
          
        </div>
        <div className='outline outline-2 rounded-sm outline-slate-300'>
          <h1>extra</h1>
          
        </div>
      </div>
    </div>
  )
}

export default Home