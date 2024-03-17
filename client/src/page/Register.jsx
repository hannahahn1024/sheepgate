import React, { useState } from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    })

    if (response.status === 200) {
      alert('register successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <div className="flex">
      <div className="w-40">
        <Sidebar>
          <SidebarItem text="Login" path="/login" />
          <SidebarItem text="Register" path="/register" />
        </Sidebar>
      </div>
      <div className="mx-auto w-screen">
        <form onSubmit={register} className="flex flex-col items-center">
          <div className="text-2xl pb-3 font-bold text-yellow-500">
            Sheepgate Register
          </div>
          <input
            type="text"
            placeholder="username"
            value={username} 
            onChange={ev => setUsername(ev.target.value)}
            className="border-b-2 border-slate-300 bg-slate-50 rounded pl-2 pt-2 pb-2 mb-3 w-2/12"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            className="border-b-2 border-slate-300 bg-slate-50 rounded pl-2 pt-2 pb-2 mb-3 w-2/12"
          />
          <button className="border-2 border-yellow-700 rounded bg-yellow-600 pl-3 pr-3 text-white font-bold pt-2 pb-2 w-2/12 hover:bg-yellow-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
