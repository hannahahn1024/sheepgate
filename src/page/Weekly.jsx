import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'

const Weekly = () => {
  return (
    <div className>
      <Sidebar>
        <SidebarItem text="영유아부" path="/hishow"/>
        <SidebarItem text="어와나" path="/awana"/>
        <SidebarItem text="아동청소년" path="/teens"/>
        <SidebarItem text="청년부" path="/youngadults"/>
        <SidebarItem text="목장모임" path="/smallgroup"/>
        <SidebarItem text="주일세미나" path="/sundayseminar"/>
        <SidebarItem text="with북카페" path="/bookcafe"/>
      </Sidebar>
      <div className='text-center'>Weekly</div>
    </div>
  )
}

export default Weekly