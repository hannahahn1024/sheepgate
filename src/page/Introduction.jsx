import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import Footer from '../components/Footer'

const Introduction = () => {
  return (
  
    
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
      
      <div className='text-center mx-auto'>
        
        <div>
          <div className="text-4xl font-bold text-green-500">양문교회 예배시간안내</div>
          <p className="text-2xl text-slate-500 font-bold">주를 알고 주를 알리자!</p>
          <p className="text-xl">(To know God and to make Him known!)</p>
        </div>
        
        <div className='place-items-center'>
          <div className="grid grid-cols-3 gap-8 l-20m mt-10">
          <div className="col-span-1 outline outline-8 rounded-sm outline-cyan-400 bg-cyan-100"><u className="decoration-cyan-400 decoration-4 font-bold">주일예배</u><p>주일</p><p>11:00</p><p>2층 예배실</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-pink-400 bg-pink-100"><u className="decoration-pink-400 decoration-4 font-bold">주일오후 연합예배</u><p>첫째, 다섯째 주일</p><p>13:30</p><p>2층 예배실</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-red-300 bg-red-100"><u className="decoration-red-400 decoration-4 font-bold">주일 목장예배</u><p>둘째, 넷째 주일</p><p>12:30</p><p>1층 With북카페</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-green-400 bg-green-100"><u className="decoration-green-400 decoration-4 font-bold">주일 세미나</u><p>셋째 주일</p><p>12:30</p><p>1층 With북카페</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-teal-400 bg-teal-100"><u className="decoration-teal-400 decoration-4 font-bold">새벽기도</u><p>월-금요일</p><p>5:20</p><p>2층 예배실</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-fuchsia-400 bg-fuchsia-100"><u className="decoration-fuchsia-400 decoration-4 font-bold">수요예배</u><p>수요일</p><p>19:30</p><p>2층 예배실</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-purple-400 bg-purple-100"><u className="decoration-purple-400 decoration-4 font-bold">금요 세미나 & 기도회</u><p>금요일</p><p>19:00</p><p>1층 With북카페</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-amber-400 bg-amber-100"><u className="decoration-amber-400 decoration-4 font-bold">영유아부 예배 (Dream's Kids)</u><p>주일</p><p>10:20</p><p>3층 비전홀</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-indigo-400 bg-indigo-100"><u className="decoration-indigo-400 decoration-4 font-bold">아동 청소년부 예배 (Teens')</u><p>주일</p><p>10:30</p><p>1층 With북카페</p></div>
          <div className="col-span-1 outline outline-8 rounded-sm outline-lime-400 bg-lime-100"><u className="decoration-lime-400 decoration-4 font-bold">목장모임 성경공부모임</u><p>월-금요일</p><p>1층 With북카페</p></div>

          <div>
          
          </div>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Introduction