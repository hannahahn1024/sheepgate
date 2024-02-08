import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'

const Sheepgate = () => {
  return (
    <div className>
      <Sidebar>
        <SidebarItem text="양문교회" path="/sheepgate"/>
        <SidebarItem text="섬기는 사람들" path="/sheepgate"/>
        <SidebarItem text="오시는 길" path="/sheepgate"/>
      </Sidebar>
      <div className='text-center'>Sheepgate</div>
    </div>
  )
}

export default Sheepgate