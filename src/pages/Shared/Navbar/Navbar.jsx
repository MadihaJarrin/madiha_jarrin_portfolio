import React, { useState } from 'react'
import { NavLink } from 'react-router'

const menuColors = {
  default: "text-white hover:text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
}

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false)

  const links = [
  "Home",
  "Education",
  "Skills",
  "Projects",
  "Research",
  "Extra Curricular",
  "Contact",
  "Blogs",
]
  return (
   <nav className="w-full bg-gray-900 shadow-lg border-b border-purple-500">
      <div className="max-w-7xl mx-auto flex justify-center px-6 py-4">
        {/* Centered Menu */}
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link, idx) => {
            // Key for theme lookup (remove spaces & lowercase)
            const key = link.toLowerCase().replace(/\s+/g, "")
            const colorClass = menuColors[key] || menuColors.default

            return (
              <NavLink
                key={idx}
                to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} // e.g., Extra Curricular -> /extra-curricular
                className={({ isActive }) =>
                  `${colorClass} font-semibold text-base transition duration-200 hover:scale-110 ${
                    isActive ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]" : ""
                  }`
                }
              >
                {link}
              </NavLink>
            )
          })}
        </div>
         </div>

{/* mb */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
    

       {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-purple-900 shadow-lg transform transition-transform duration-300 z-40 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 px-6 gap-6">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setDrawerOpen(false)} // close drawer on click
              className="relative font-semibold text-lg text-white transition-all duration-200 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
            >
              {/* Hover white box */}
              <span className="absolute inset-0 bg-white/20 rounded-md opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
              <span className="relative z-10">{link}</span>
            </NavLink>
          ))}
        </div>
      </div>


    </nav>
  )
}

export default Navbar
