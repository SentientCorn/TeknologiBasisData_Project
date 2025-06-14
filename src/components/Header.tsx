import type React from "react";
import { useState } from "react";
import { Home, User, Menu, X } from "lucide-react";
import LoginModal from './LoginModal';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const Header: React.FC= () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems: SidebarItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/' },
    { icon: <User size={20} />, label: 'Profile', href: '/profile' },
  ];

  return (
   <div className="relative">
      {/* Header */}
      <header style={{ backgroundColor: "var(--kuning1)" }} className="shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-gray-900">Logo</span>
          <h1 className="text-lg font-semibold text-gray-900">ArkTol</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md transition-colors hover:cursor-pointer hover:bg-[var(--kuning2)]"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'shadow-[-5px_0px_30px_rgba(0,0,0,0.4)]' : ''
        } ${
          isSidebarOpen ? '-translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '280px', backgroundColor: 'var(--kuning2)' }}
      >
      
        {/* Sidebar content */}
        <div style={{backgroundColor: 'var(--kuning1)'}} className="m-3 p-4 border-gray-1000 rounded-xl">
          <div  className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md transition-colors hover:cursor-pointer hover:bg-[var(--kuning2)]"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          className="m-3 p-2 border-gray-1000 rounded-xl flex flex-col items-center"
          style={{ backgroundColor: 'var(--kuning1)' }}>
            <div className="w-20 h-20 rounded-full mx-auto  justify-center overflow-hidden border-3 mb-3 mt-3"
              style={{ borderColor: 'var(--kuning2)' }}>
              <img
                src="src/assets/runglogin1.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-50 border-t my-2" style={{ borderColor: 'var(--kuning2)' }}></div>
            <div className="text-lg font-semibold text-gray-900 text-center">Hello, Guest!</div>
            <div className="w-50 border-t my-2" style={{ borderColor: 'var(--kuning2)' }}></div>
            <div className="text-sm text-gray-600 text-center mb-1">Please Log In!</div>
            <div className="w-50 border-t my-2" style={{ borderColor: 'var(--kuning2)' }}></div>
            <div className="flex mx-auto justify-center mt-3 mb-3">
              <button
                className="text-sm font-semibold text-gray-900 px-4 py-2 rounded-md transition-colors bg-[var(--kuning2)] hover:bg-[var(--coklat)] hover:cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </div>
        </div>

        <nav style={{backgroundColor: 'var(--kuning1)'}} className="m-3 p-2 border-gray-1000 rounded-xl">
          <ul className="space-y-1 ">
            {sidebarItems.map((item, index) => (
              <li key={index}>
          <a
            href={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors hover:bg-[var(--kuning2)] hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Navigating to ${item.label}`);
            }}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </a>
              </li>
            ))}
          </ul>
        </nav>
            </div>


      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={toggleSidebar}
        />
      )}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default Header;
