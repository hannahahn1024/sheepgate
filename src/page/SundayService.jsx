import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'


const SundayService = () => {
  return (
    <div className>
      <Sidebar>
        <SidebarItem text="예배안내" path="/introduction"/>
        <SidebarItem text="주일예배" path="/sundayservice"/>
        <SidebarItem text="수요예배" path="/wednesdayservice"/>
        <SidebarItem text="특별예배" path="/specialservice"/>
        <SidebarItem text="가정예배" path="/familyservice"/>
        <SidebarItem text="가정예배 나눔" path="/familysharing"/>
      </Sidebar>
      <div className='text-center'>Sunday Service</div>
    </div>
  )
}

export default SundayService