import React, { useState, useRef, useEffect } from "react";
// import Sidebar, { SidebarItem } from '../components/Sidebar'
import Sidebar, { SidebarItem } from "../components/Sidebar_sheepgate";
import SheepImage from "../assets/sheepimage.png";
import Pastor from "../assets/pastor.png";
import Pastor2 from "../assets/newpics/pastor2_updated.png";
import jangro_1 from "../assets/jangro1.png";
import jangro_2 from "../assets/jangro2.png";
import jangro_3 from "../assets/jangro3.png";
import jangro_4 from "../assets/jangro4.png";
import min1 from "../assets/min1.png";
import min2 from "../assets/min2.png";
import min3 from "../assets/min3.png";
import min4 from "../assets/min4.png";
import min5 from "../assets/min5.png";
import min6 from "../assets/min6.png";
import min7 from "../assets/min7.png";
import min8 from "../assets/min8.png";
import min9 from "../assets/min9.png";
import min10 from "../assets/min10.png";
import min11 from "../assets/min11.png";
import min12 from "../assets/min12.png";
import min13 from "../assets/min13.png";
import min14 from "../assets/min14.png";
import wonjuhospital from "../assets/wonjuhospital.png";
import cbs_logo from "../assets/cbs_logo.png";
import awana_logo from "../assets/awana_logo.png";
import Carousel from "../components/Carousel";
import Map from "../components/KakaoMap";
import Footer from "../components/Footer";

const Sheepgate = () => {
  const [bibleVerse, setBibleVerse] = useState(
    "여호와는 나의 목자시니\n내가 부족함이 없으리라."
  );
  const [welcomeText, setWelcomeText] = useState(
    "양문교회는\n\n기독교대한성결교회에 소속된 교회입니다.\n\n중생, 성결, 신유, 재림의 사중복음을 중심으로 예배와 말씀 그리고 목장모임으로\n건강하게 성장하고 있는 '젊은교회' 입니다.\n\n다음세대를 위한 교회학교 교육을 위해 히즈쇼 (Hishow), AWANA (어와나), 틴즈 (Teens)\n프로그램을 운영하는 '믿음의 세대를 위한 교회' 입니다.\n\n구원의 길 되신 예수님과 함께 (in Jesus) 하며 성도의 인생 길 위에 함게 (with Life) 하며\n세상의 길로 향하는 (On the Road) '균형있는 교회' 입니다.\n\n양문교회를 통해 하나님을 알고 성도의 깊은 사랑을 경험하길 원하는 분들을 환영하고 축복합니다."
  );
  const [pastorText, setPastorText] = useState(
    "이는 그들로 마음의 위안을 받고\n사랑 안에서 연합하여\n확실한 비밀인 그리스도를\n깨닫게 하려 함이니. (골 2:2)\n\n-학력-\n연세대학교 일반대학원 상담코칭학 박사 (Ph.D)\n서울신학대학교 목회학 석사 (M.Div)\n연세대학교 연합신학대학원 상담학 석사 (Th.M)\n서울신학대학교 신학 학사 (B.A.)\n\n-경력-\n양문교회 담임목사\n전) 한국도박문제관리센터 깅원센터 정선분소장\n전) 연세대원주의과대학 상담코칭센터 전임상담원\n전) 연세대원주의과대학 교목실, 대학교회 교육목사\n전) 한국어와나 (AWANA) 코디네이터\n전) 한국상담학회 가원지부간사\n\n-사역-\n성락성결교회 협동목사\n새소망교회 교육전도사\n신촌성결교회 청념부 간사\n예수전도단 UDTS 졸업\n예수전도단 서울신대 대표\n새롬복음선교단"
  );
  const [pastor2Text, setPastor2Text] = useState(
    "양문교회 교회학교\n청년부 담당\n예수전도단 원주지부 간사"
  );

  const scrollElement = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      url: min1,
    },
    {
      url: min2,
    },
    {
      url: min3,
    },
    {
      url: min4,
    },
    {
      url: min5,
    },
    {
      url: min6,
    },
    {
      url: min7,
    },
    {
      url: min8,
    },
    {
      url: min9,
    },
    {
      url: min10,
    },
    {
      url: min11,
    },
    {
      url: min12,
    },
    {
      url: min13,
    },
    {
      url: min14,
    },
  ];

  return (
    <div className="flex">
      <div className="w-40">
        <Sidebar>
          <SidebarItem
            text="양문교회"
            path="church"
            scrollElement={scrollElement}
          />
          <SidebarItem
            text="섬기는 사람들"
            path="minister"
            scrollElement={scrollElement}
          />
          <SidebarItem
            text="후원단체"
            path="support"
            scrollElement={scrollElement}
          />
          <SidebarItem
            text="오시는 길"
            path="path"
            scrollElement={scrollElement}
          />
        </Sidebar>
      </div>

      <div className="border" ref={scrollElement}>
        <div className="flex relative">
          <img
            src={SheepImage}
            alt="Sheep Image"
            className="w-screen h-[90vh]"
          />
          <div className="absolute -bottom-16 left-12 h-52 text-4xl font-bold whitespace-pre-line pointer-events-none text-white">
            {bibleVerse}
          </div>
        </div>
        <div
          className="text-center whitespace-pre-line pb-10 pt-10 bg-slate-100 font-bold pointer-events-none border"
          id="church"
        >
          {" "}
          {welcomeText}
        </div>
        <div className="bg-slate-300 border" id="minister">
          <div className="text-center text-4xl pb-10 font-bold pt-10">
            섬기는 사람들
          </div>
        </div>
        <div className="bg-slate-100 border">
          <div className="text-center text-3xl pt-10 font-bold">담임목사</div>
          <div className="grid grid-cols-2 gap-12 pb-10">
            <div className="text-2xl ml-48">
              <div className="mb-3 font-bold">장익 목사</div>
              <div className="whitespace-pre-line text-base">{pastorText}</div>
            </div>
            <img
              src={Pastor}
              alt="Pastor Image"
              className="mx-auto w-1/2 border-4 border-slate-500"
            />
          </div>
        </div>

        <div className="bg-slate-200 border">
          <div className="text-center text-3xl pt-10 font-bold">
            교육부 담임목사
          </div>
          <div className="grid grid-cols-2 gap-12 pb-10 pt-10">
            <div>
              <img
                src={Pastor2}
                alt="Pastor 2 Image"
                className="w-2/6 mx-auto border-4 border-slate-500"
              />
            </div>
            <div className="flex items-center">
              <div className="text-2xl ml-48">
                <div className="mb-5 font-bold">홍순호 목사</div>
                <div className="whitespace-pre-line text-base">
                  {pastor2Text}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 border">
          <div className="text-center text-3xl mb-10 pt-10 font-bold">
            장로 / 안수집사
          </div>
          <div className="grid grid-cols-4 pl-16 pb-10">
            <div>
              <div className="font-bold text-lg">김병립 장로</div>
              <img
                src={jangro_4}
                alt="Elder Image 1"
                className="border-solid border-2 border-slate-300"
              />
            </div>
            <div>
              <div className="font-bold text-lg">김동환 장로</div>
              <img
                src={jangro_3}
                alt="Elder Image 2"
                className="border-solid border-2 border-slate-300"
              />
            </div>
            <div>
              <div className="font-bold text-lg">권태영 안수집사</div>
              <img
                src={jangro_2}
                alt="Ordained deacon Image 1"
                className="border-solid border-2 border-slate-300"
              />
            </div>
            <div>
              <div className="font-bold text-lg">김상준 안수집사</div>
              <img
                src={jangro_1}
                alt="Ordained deacon Image 2"
                className="border-solid border-2 border-slate-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-200 border">
          <div className="text-center text-3xl pt-10 font-bold">사역자</div>
          <div>
            <Carousel slides={slides} />
          </div>
        </div>

        <div className="bg-slate-100 border">
          <div className="text-center text-3xl pt-10 font-bold">후원선교사</div>
          <div>
            <Carousel slides={slides} />
          </div>
        </div>

        <div className="bg-slate-200 border text-center pb-10" id="support">
          <div className="text-center text-3xl mb-10 pt-10 font-bold">
            후원단체
          </div>
          <div className="grid grid-cols-3">
            <div className="ml-10">
              <div className="mb-2 font-bold text-lg">강원 CBS</div>
              <img
                src={cbs_logo}
                alt="cbs logo"
                className="flex mx-auto border-4 border-slate-500 rounded"
              />

              <button
                onClick={() => window.open("https://www.cbs.co.kr/", "_blank")}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
              >
                더 알아보기
              </button>
            </div>
            <div>
              <div className="mb-2 font-bold text-lg">한국 AWANA</div>
              <img
                src={awana_logo}
                alt="awana logo"
                className="flex mx-auto border-4 border-slate-600 rounded"
              />
              <button
                onClick={() =>
                  window.open("http://www.awanakorea.net/", "_blank")
                }
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
              >
                더 알아보기
              </button>
            </div>
            <div>
              <div>
                <div className="mb-2 font-bold text-lg">
                  원주세브란스기독병원
                </div>
                <img
                  src={wonjuhospital}
                  alt="wonjuhospital"
                  className="flex mx-auto border-4 border-slate-500 rounded"
                />
                <button
                  onClick={() =>
                    window.open("https://www.ywmc.or.kr/web/www", "_blank")
                  }
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
                >
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="text-center text-3xl pt-10 pb-10 font-bold" id="path">
            오시는 길
          </div>
        </div>
        <div className="bg-slate-100 pb-10">
          <Map />
        </div>

        <Footer />
      </div>

      <button
        className="fixed bottom-4 right-4 outline outline-2 backdrop-blur-md rounded-3xl py-2 px-4 font-extrabold"
        onClick={scrollToTop}
      >
        ⭡
      </button>
    </div>
  );
};

export default Sheepgate;
