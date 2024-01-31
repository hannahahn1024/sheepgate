import React from "react"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Instruction from './page/Introduction/'
import Sheepgate from "./page/Sheepgate"
import Hishow from "./page/Hishow"
import Weekly from "./page/Weekly"

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/sheepgate" element={<Sheepgate />} />
        <Route path = "/introduction" element={<Instruction />} />
        <Route path = "/hishow" element={<Hishow />} />
        <Route path = "/weeklynews" element={<Weekly />} />
      </Routes>
    </div>
  )
}

export default App
