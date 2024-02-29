import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex">
      <div className="w-40">
        <Sidebar>
          <SidebarItem text="Login" path="/login" />
          <SidebarItem text="Register" path="/register" />
        </Sidebar>
      </div>
      <div className="mx-auto w-screen">
        <form className="flex flex-col items-center">
          <div className="text-2xl pb-3 font-bold text-yellow-500">
            Sheepgate Login
          </div>
          <input
            type="text"
            placeholder="username"
            className="border-b-2 border-slate-300 bg-slate-50 rounded pl-2 pt-2 pb-2 mb-3 w-2/12"
          />
          <input
            type="password"
            placeholder="password"
            className="border-b-2 border-slate-300 bg-slate-50 rounded pl-2 pt-2 pb-2 mb-3 w-2/12"
          />
          <button className="border border-2 border-yellow-700 rounded bg-yellow-600 pl-3 pr-3 text-white font-bold pt-2 pb-2 w-2/12 mb-2 hover:bg-yellow-700">
            Log In
          </button>
          <Link to="/register">
            <button className="text-blue-500 underline">
              Don't have an account? Create an account.
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
