import React from "react"
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Sheepgate from "./page/Sheepgate"
import Login from "./page/Login"
import Register from "./page/Register"
import Awana from "./page/Awana"
import BookCafe from "./page/BookCafe"
import FamilyService from "./page/FamilyService"
import FamilySharing from "./page/FamilySharing"
import CBSColumn from "./page/CBSColumn"
import CBSToday from "./page/CBSToday"
import ChurchNews from "./page/ChurchNews"
import Gallery from "./page/Gallery"
import Hishow from "./page/Hishow"
import Introduction from "./page/Introduction"
import MissionNews from './page/MissionNews'
import NewFamily from './page/NewFamily'
import SmallGroup from './page/SmallGroup'
import SpecialService from './page/SpecialService'
import SundayService from './page/SundayService'
import SundaySeminar from './page/SundaySeminar'
import Teens from "./page/Teens"
import Videos from './page/Videos'
import WednesdayService from "./page/WednesdayService"
import Weekly from "./page/Weekly"
import WeeklyNews from './page/WeeklyNews'
import YoungAdults from "./page/YoungAdults"
import AccountSetting from "./page/AccountSettings"
import CreateNewPost from "./page/CreateNewPost"
import { UserContextProvider } from "./page/UserContext"
import PostPage from "./components/PostPage"

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/sheepgate" element={<Sheepgate />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/awana" element={<Awana />} />
          <Route path = "/bookcafe" element={<BookCafe />} />
          <Route path = "/cbscolumn" element={<CBSColumn />} />
          <Route path = "/cbstoday" element={<CBSToday />} />
          <Route path = "/churchnews" element={<ChurchNews />} />
          <Route path = "/familyservice" element={<FamilyService />} />
          <Route path = "/familysharing" element={<FamilySharing />} />
          <Route path = "/gallery" element={<Gallery />} />
          <Route path = "/hishow" element={<Hishow />} />
          <Route path = "/introduction" element={<Introduction />} />
          <Route path = "/missionnews" element={<MissionNews />} />
          <Route path = "/newfamily" element={<NewFamily />} />
          <Route path = "/smallgroup" element={<SmallGroup />} />
          <Route path = "/specialservice" element={<SpecialService />} />
          <Route path = "/sundayseminar" element={<SundaySeminar />} />
          <Route path = "/sundayservice" element={<SundayService />} />
          <Route path = "/teens" element={<Teens />} />
          <Route path = "/videos" element={<Videos />} />
          <Route path = "/wednesdayservice" element={<WednesdayService />} />
          <Route path = "/weekly" element={<Weekly />} />
          <Route path = "/weeklynews" element={<WeeklyNews />} />
          <Route path = "/youngadults" element={<YoungAdults />} />
          <Route path = "/accountsetting" element={<AccountSetting />} />
          <Route path = "/createnewpost" element={<CreateNewPost />} />
          <Route path = "/post/:id" element={<PostPage/>} />
        </Routes>
      </UserContextProvider>
      
    </div>
  )
}

export default App
