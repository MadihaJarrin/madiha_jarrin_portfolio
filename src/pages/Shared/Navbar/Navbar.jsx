import React from 'react'
import { NavLink } from 'react-router'

const menuColors = {
  default: "text-white hover:text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
}

const Navbar = () => {
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
                  `${colorClass} font-semibold text-lg transition duration-200 hover:scale-110 ${
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
    </nav>
  )
}

export default Navbar
