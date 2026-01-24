
import { useState } from "react"

const menuColors = {
  default:
    "text-white hover:text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
}

const Navbar = () => {
   const [drawerOpen, setDrawerOpen] = useState(false)

  const links = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contribution", href: "#contribution" },
    { label: "Certification", href: "#certification" },
    { label: "Blogs", href: "#blogs" },
  ]

  return (
     <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-purple-500 z-50">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto flex justify-center px-6 py-4">
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {links.map((link, idx) => {
            const key = link.label.toLowerCase().replace(/\s+/g, "")
            const colorClass = menuColors[key] || menuColors.default

            return (
              <a
                key={idx}
                href={link.href}
                className={`${colorClass} font-semibold text-base transition duration-200 hover:scale-110`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 border-l border-purple-500 shadow-lg transform transition-transform duration-300 z-40 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>
         <div className="flex flex-col mt-24 px-6 gap-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="relative font-semibold text-lg text-white transition-all duration-200 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
            >
              <span className="absolute inset-0 bg-white/20 rounded-md opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar



// import React, { useState } from 'react'
// import { NavLink } from 'react-router'

// const menuColors = {
//   default: "text-white hover:text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
// }

// const Navbar = () => {

//     const [drawerOpen, setDrawerOpen] = useState(false)

//   const links = [
//   "Home",
//   "Education",
//   "Skills",
//   "Projects",
//   "Research",
//   "Contribution",
//   "Certification",
//   "Blogs",
// ]
//   return (
//    <nav className="w-full bg-gray-900 shadow-lg border-b border-purple-500">
//       <div className="max-w-7xl mx-auto flex justify-center px-6 py-4">
//         {/* Centered Menu */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {links.map((link, idx) => {
//             // Key for theme lookup (remove spaces & lowercase)
//             const key = link.toLowerCase().replace(/\s+/g, "")
//             const colorClass = menuColors[key] || menuColors.default

//             return (
//               <NavLink
//                 key={idx}
//                 to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} // e.g., Extra Curricular -> /extra-curricular
//                 className={({ isActive }) =>
//                   `${colorClass} font-semibold text-base transition duration-200 hover:scale-110 ${
//                     isActive ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]" : ""
//                   }`
//                 }
//               >
//                 {link}
//               </NavLink>
//             )
//           })}
//         </div>
//          </div>

// {/* mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setDrawerOpen(!drawerOpen)}
//             className="text-white text-2xl focus:outline-none"
//           >
//             ☰
//           </button>
//         </div>
    

//        {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-64 bg-purple-900 shadow-lg transform transition-transform duration-300 z-40 ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col mt-20 px-6 gap-6">
//           {links.map((link, idx) => (
//             <NavLink
//               key={idx}
//               to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
//               onClick={() => setDrawerOpen(false)} // close drawer on click
//               className="relative font-semibold text-lg text-white transition-all duration-200 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
//             >
//               {/* Hover white box */}
//               <span className="absolute inset-0 bg-white/20 rounded-md opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
//               <span className="relative z-10">{link}</span>
//             </NavLink>
//           ))}
//         </div>
//       </div>


//     </nav>
//   )
// }

// export default Navbar
