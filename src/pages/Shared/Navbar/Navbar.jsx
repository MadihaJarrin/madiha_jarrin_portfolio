import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    const linkStyle =
    "px-4 py-2 text-sm font-medium transition-colors duration-200"

  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold tracking-wide">
          Madiha<span className="text-indigo-400">.</span>
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
