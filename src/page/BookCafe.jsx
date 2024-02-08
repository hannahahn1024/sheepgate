import React from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';

const BookCafe = () => {
  return (
    <div className="flex">
      <div className="w-52"> 
        <Sidebar>
          <SidebarItem text="영유아부 (Hishow)" path="/hishow"/>
          <SidebarItem text="어와나 (AWANA)" path="/awana"/>
          <SidebarItem text="아동청소년 (Teens)" path="/teens"/>
          <SidebarItem text="청년부 (여호수아)" path="/youngadults"/>
          <SidebarItem text="목장모임" path="/smallgroup"/>
          <SidebarItem text="주일세미나" path="/sundayseminar"/>
          <SidebarItem text="with북카페" path="/bookcafe"/>
        </Sidebar>
      </div>
      <div>Book Cafe</div>
    </div>
  );
};

export default BookCafe;
