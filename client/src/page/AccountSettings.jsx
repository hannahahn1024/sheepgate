import { Fragment, useState, useEffect, useContext } from 'react'
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { UserContext } from '../page/UserContext'
import { Link, Navigate } from "react-router-dom";

const AccountSetting = () => {
    const {setUserInfo, userInfo} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
            // setUsername(userInfo.username);
          });
        });
      }, []);
    
    async function logout() {
        const response = await fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST',
        })
        setUserInfo(null);
        // console.log('logout ok');

        if (response.ok) {
            setRedirect(true);
        }
        else {
            alert('wrong credentials');
        }
    }
    if(redirect) {
        return <Navigate to={'/login'}/>
      }

    const username = userInfo?.username;
    // console.log(username)

    return (
      <div className="flex">
        <div className="w-40">
            <Sidebar>
            <SidebarItem text="Login" path="/login" />
            <SidebarItem text="Register" path="/register" />
            </Sidebar>
        </div>
        <div className='items-center w-screen'>
            <div className='text-center'>Account Setting</div>
            <Link to ="/createnewpost"> Create new post</Link>
            <button className='border-2 border-yellow-700 rounded bg-yellow-600 pl-3 pr-3 text-white font-bold pt-2 pb-2 w-2/12 mb-2 hover:bg-yellow-700' onClick={logout}>Log Out</button>
        </div>
        
      </div>
    )
  }
  
  export default AccountSetting