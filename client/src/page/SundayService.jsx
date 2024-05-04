import React, {useEffect, useState} from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { MagnifyingGlassIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const SundayService = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        // console.log(posts);
      });
    });
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-44">
          <Sidebar>
            <SidebarItem text="예배안내" path="/introduction" />
            <SidebarItem text="주일예배" path="/sundayservice" />
            <SidebarItem text="수요예배" path="/wednesdayservice" />
            <SidebarItem text="특별예배" path="/specialservice" />
            <SidebarItem text="가정예배" path="/familyservice" />
            <SidebarItem text="가정예배 나눔" path="/familysharing" />
          </Sidebar>
        </div>
        <div className="flex mx-auto flex-col w-screen">
          <div className="text-center">주일 예배</div>

          <>
            {posts.length > 0 && posts.map(post => (
              <Post {...post}/>
            ))}
          </>


          {/* <div className="flex mx-auto grid-2 mt-4 ">
            <div className=" hover:bg-gray-700 hover:text-white hover:border-gray-700">
              <MagnifyingGlassIcon className="w-5" />
              <></>
            </div>
            <div className="mx-2 hover:border-gray-700">
              <MagnifyingGlassIcon className="w-5" />
              Hello2
            </div>
          </div> */}

          {/* <div className="flex border flex-col">
            <hr className="mt-6 mb-3 border-t-2 border-gray-300 w-2/3 mx-auto" />
            <div>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 border border-gray-400 rounded shadow mr-3 items-center w-1/12 ">
                <Bars4Icon className="w-5 mr-1" />
                목록
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 border border-gray-400 rounded shadow mr-3 items-center">
                <MagnifyingGlassIcon className="w-5 mr-1" />
                검색
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SundayService;
