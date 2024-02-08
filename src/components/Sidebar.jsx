import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className={`h-screen w-52 transition-all duration-300 fixed`}>
      <nav className="h-full flex flex-col shadow-sm">
        <SidebarContext.Provider value={true}>
          <ul className="flex-1 px-3 flex flex-col items-center justify-top">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ text, path, active, alent }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    }

  return (
    <li
      className={`
        relative flex items-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group scrollPage w-48
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      onClick={handleNavigate}
    >
      <span className={`overflow-hidden transition-all w-48 ml-1`}>{text}</span>
      {alent && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />}
    </li>
  );
}