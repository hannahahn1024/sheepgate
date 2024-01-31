import React from "react"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Temp from './page/temp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = "/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
