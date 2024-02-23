import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/church_logo_transparent.png'



const Footer = () => {
  return (
    <div className="bg-gray-700 text-white p-4 text-center ">
      <ul className="flex justify-center space-x-12 items-center">
      <li>
          <img src = {logo} alt='church logo'/>
        </li>
        <li>
          <Link to = "/sheepgate" >교회소개</Link>
        </li>
        <li>
          <Link to ="/introduction" >예배</Link>
        </li>
        <li>
          <Link to = "/hishow" >사역</Link>
        </li>
        <li>
          <Link to ="/weeklynews" >커뮤니티</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer