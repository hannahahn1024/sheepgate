import React, { useState } from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import SheepImage from '../assets/sheepimage.png'
import Pastor from '../assets/pastor.png'
import jangro_1 from '../assets/jangro1.png'
import jangro_2 from '../assets/jangro2.png'
import jangro_3 from '../assets/jangro3.png'
import jangro_4 from '../assets/jangro4.png'

const Sheepgate = () => {
  const [bibleVerse, setBibleVerse] = useState("여호와는 나의 목자시니\n내가 부족함이 없으리라.");
  const [welcomeText, setWelcomeText] = useState("양문교회는\n\n기독교대한성결교회에 소속된 교회입니다.\n\n중생, 성결, 신유, 재림의 사중복음을 중심으로 예배와 말씀 그리고 목장모임으로\n건강하게 성장하고 있는 '젊은교회' 입니다.\n\n다음세대를 위한 교회학교 교육을 위해 히즈쇼 (Hishow), AWANA (어와나), 틴즈 (Teens)\n프로그램을 운영하는 '믿음의 세대를 위한 교회' 입니다.\n\n구원의 길 되신 예수님과 함께 (in Jesus) 하며 성도의 인생 길 위에 함게 (with Life) 하며\n세상의 길로 향하는 (On the Road) '균형있는 교회' 입니다.\n\n양문교회를 통해 하나님을 알고 성도의 깊은 사랑을 경험하길 원하는 분들을 환영하고 축복합니다.");
  const [pastorText, setPastorText] = useState("이는 그들로 마음의 위안을 받고 \n사랑 안에서 연합하여 \n확실한 비밀인 그리스도를 \n깨닫게 하려 함이니. (골 2:2)\n\n-학력-\n연세대학교 일반대학원 상담코칭학 박사 (Ph.D)\n서울신학대학교 목회학 석사 (M.Div)");

  return (
    
    <div className='flex'>
      <div className='w-44'>
        <Sidebar>
          <SidebarItem text="양문교회" path="/sheepgate"/>
          <SidebarItem text="섬기는 사람들" path="/sheepgate"/>
          <SidebarItem text="오시는 길" path="/sheepgate"/>
        </Sidebar>
      </div>
      <div className=''>
        <div className='flex relative'>
          <img src={SheepImage} alt="Sheep Image" className='w-screen h-[90vh]'/>
          <div className='absolute -bottom-16 left-12 h-52 text-4xl font-bold whitespace-pre-line pointer-events-none text-white'>
            {bibleVerse}
          </div>
        </div>
      <div className='text-center whitespace-pre-line pb-10 pt-10 bg-red-50 font-bold pointer-events-none'> {welcomeText}</div>
        <div className='bg-blue-50'>
          <div className='text-center text-3xl pb-10 font-bold pt-10'>섬기는 사람들</div>
          <div class= 'grid grid-cols-2 gap-12 pb-10'>
            <div className='text-xl ml-48'>
              <div className='mb-3 font-bold'>
                담임목사 장익
              </div>

              <div className='whitespace-pre-line'>
                {pastorText}
              </div>
            </div>
            <img src={Pastor} alt='Pastor Image' className='ml-12 pl-24'/>
          </div>
        </div>
        <div className='bg-green-50'>
          <div className='text-center text-3xl mb-10 pt-10 font-bold'>장로 / 안수집사</div>
          <div className='grid grid-cols-4 pl-16 pb-10'>
            <div>
              <div className='font-bold text-lg'>김병립 장로</div>
              <img src={jangro_4} alt='Elder Image 1' className=''/>
            </div>
            <div>
              <div className='font-bold text-lg'>김동환 장로</div>
              <img src={jangro_3} alt='Elder Image 2' className=''/>
            </div>
            <div>
              <div className='font-bold text-lg'>권태영 안수집사</div>
              <img src = {jangro_2} alt='Ordained deacon Image 1' className=''/>
            </div>
            <div>
              <div className='font-bold text-lg'>김상준 안수집사</div>
              <img src={jangro_1} alt='Ordained deacon Image 2' className=''/>
            </div>
          </div>
        </div>

        <div className='bg-amber-50'>
          <div className='text-center text-3xl mb-10 pt-10 font-bold'>사역자</div>
        </div>
      </div>
    </div>
  )
}

export default Sheepgate