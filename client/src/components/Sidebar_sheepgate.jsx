import { createContext } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className={`h-screen w-36 transition-all duration-300 fixed`}>
      <nav className="h-full flex flex-col shadow-sm">
        <SidebarContext.Provider value={true}>
          <ul className="flex-1 px-3 flex flex-col items-center justify-top">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ text, path, active, scrollElement }) {
  const scrollPage = (path) => {
    const pageElement = document.getElementById(path);
    if (pageElement && scrollElement.current) {
      window.scrollTo({
        top: pageElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <li
      className={`
      relative flex items-center py-2 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group scrollPage w-36
      ${active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 "
        : "hover:bg-yellow-50 text-yellow-600"
      }
    `}
      onClick={() => scrollPage(path)}
    >
      <span className={`overflow-hidden transition-all w-36 ml-5`}>{text}</span>
    </li>
  );
}