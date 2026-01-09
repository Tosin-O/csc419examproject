import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  MessageSquare,
  User,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";



interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", path: "/home", icon: Home },
    { label: "Search", path: "/search", icon: Search },
    { label: "Notification", path: "/notifications", icon: Bell },
    { label: "Chats", path: "/chats", icon: MessageSquare },
    { label: "Profile", path: "/profile", icon: User },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
<div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-dark border-b border-white/5 flex items-center px-4 z-40">
  <button
    onClick={() => setOpen(true)}
    className="text-white mr-3"
    aria-label="Open menu"
  >
    <Menu size={24} />
  </button>

  {/* Logo + Text */}
  <div className="flex items-center gap-2">
    <img
      src="/logo.svg"
      alt="gConnect logo"
      className="w-6 h-6 object-contain"
    />
    <span className="font-semibold text-white">gConnect</span>
  </div>
</div>


      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-dark
          border-r border-white/5 px-6 py-8 flex flex-col
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-400"
          onClick={() => setOpen(false)}
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div className="mb-10 px-2 flex items-center gap-2">
          
            <img
      src="/logo.svg"
      alt="gConnect logo"
      className="w-6 h-6 object-contain"
    />
          
          <span className="text-lg font-semibold">gConnect</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-3">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-xl transition group
                ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-200"
                    }
                  />
                  <span className="text-sm tracking-wide">{label}</span>
                </>
              )}
            </NavLink>
          ))}

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-xl">
            Create
          </button>

        </nav>
        

       
      </aside>
    </>
  );
};


