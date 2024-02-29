import React from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import { MagnifyingGlassIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const SundayService = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-44'>
          <Sidebar>
            <SidebarItem text="예배안내" path="/introduction"/>
            <SidebarItem text="주일예배" path="/sundayservice"/>
            <SidebarItem text="수요예배" path="/wednesdayservice"/>
            <SidebarItem text="특별예배" path="/specialservice"/>
            <SidebarItem text="가정예배" path="/familyservice"/>
            <SidebarItem text="가정예배 나눔" path="/familysharing"/>
          </Sidebar>
        </div>
      </div>

      <div className='text-center'>주일 예배</div>

      <div className='flex justify-center grid-2 mt-4 '>
        <div className='mx-2 hover:bg-gray-700 hover:text-white hover:border-gray-700'>
          <MagnifyingGlassIcon className='w-5 mr-1'/>
          Hello
        </div>
        <div className='mx-2 hover:border-gray-700'>
          <MagnifyingGlassIcon className='w-5 mr-1'/>
          Hello2
        </div>
      </div>

      <hr className="mt-6 mb-3 border-t-2 border-gray-300 w-1/2 mx-auto" />

      <div className="flex justify-center">
        <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 border border-gray-400 rounded shadow mr-3 flex items-center"> {/* Added flex and items-center classes */}
          <Bars4Icon className='w-5 mr-1'/>
          목록
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 border border-gray-400 rounded shadow mr-3 flex items-center"> {/* Added flex and items-center classes */}
          <MagnifyingGlassIcon className='w-5 mr-1'/>
          검색
        </button>
      </div>
    </div>
  );
};

export default SundayService;
