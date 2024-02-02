import React from "react"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Instruction from './page/Introduction/'
import Sheepgate from "./page/Sheepgate"
import Hishow from "./page/Hishow"
import Weekly from "./page/Weekly"
import Awana from "./page/Awana"
import FamilyService from "./page/FamilyService"
import FamilySharing from "./page/FamilySharing"
import BookCafeSmallGroup from "./page/bookcafe"
import CBSColumnSpecialService from "./page/CBSColumn"
import ChurchNewsSundayService from "./page/ChurchNews"
import Gallery from "./page/Gallery"

import Teens from "./page/Teens"
import WednesdayService from "./page/WednesdayService"
import YoungAdults from "./page/YoungAdults"

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
        <Route path = "/awana" element={<Awana />} />
        <Route path = "/familyservice" element={<FamilyService/>} />
        <Route path = "/familysharing" element={<FamilySharing />} />
        <Route path = "/smallgroup" element={<SmallGroup />} />
        <Route path = "/specialservice" element={<SpecialService />} />

        <Route path = "/sundayservice" element={<SundayService />} />
        <Route path = "/teens" element={<Teens />} />
        <Route path = "/wednesdayservice" element={<WednesdayService />} />
        <Route path = "/youngadults" element={<YoungAdults />} />
      </Routes>
    </div>
  )
}

export default App
