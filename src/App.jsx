import React from "react"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './page/Home'

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
