import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Madiha Jarrin. All rights reserved.
        </p>

        <p className="text-xs mt-2">
          Built with Authenticity
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
