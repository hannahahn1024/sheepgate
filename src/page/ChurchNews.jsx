import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'

const ChurchNews = () => {
  return (
    <div className>
      <Sidebar>
        <SidebarItem text="주간소식" path="/weeklynews"/>
        <SidebarItem text="새가족" path="/newfamily"/>
        <SidebarItem text="교회갤러리" path="/gallery"/>
        <SidebarItem text="교회동영상" path="/videos"/>
        <SidebarItem text="교회소식지" path="/churchnews"/>
        <SidebarItem text="선교지 소식" path="/missionnews"/>
        <SidebarItem text="CBS칼럼" path="/cbscolumn"/>
        <SidebarItem text="CBS 반가운 오늘" path="/cbstoday"/>
        <SidebarItem text="교회행정서류" path="/weeklynews"/>
      </Sidebar>
      <div className='text-center'>Church News</div>
    </div>
  )
}

export default ChurchNews