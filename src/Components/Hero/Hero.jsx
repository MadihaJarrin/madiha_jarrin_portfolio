import React from 'react'
import { motion } from "framer-motion"
import MyPhoto from '../../assets/jarrin.png'

const Hero = () => {
  return (
    <section id="home" 
          className="w-full min-h-screen bg-gray-900 flex flex-col md:flex-row items-center px-6 md:px-20 py-10 md:py-20 gap-8 md:gap-12"
    >
      
        {/* Left Side: Text */}
      <motion.div
      className="flex-1 max-w-full md:max-w-[55%] text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-gray-200 leading-snug">
          Hi, I'm <br /> 
          {"Madiha Jarrin".split("").map((char, index) => (
  <motion.span
    key={index}
              className="inline-block text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: index * 0.08,
      duration: 0.05,
      ease: "easeOut",
    }}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
))}
        </h1>
        <p 
className="mt-4 text-base sm:text-lg md:text-lg text-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] leading-relaxed"        >
     
            a fresh graduate from North South University, majoring in CSE with
            a focus on Artificial Intelligence. I've a strong interest in data analysis
            to uncover insights and make informed decisions. 
            Alongside my analytical mindset, I'm passionate about design and development.
            
            Eager to grow and build meaningful experiences in the world
        </p>
        <motion.a
          href="#projects"
                    className="mt-8 inline-block px-6 py-3 bg-white/10 text-purple-400 font-semibold rounded-md hover:bg-white/20 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition duration-200"

          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Work
        </motion.a>
      </motion.div>

       {/* Right Side: Photo */}
      <motion.div
              className="flex-1 flex justify-center md:justify-end"

        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div 
        className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-400 p-2 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
        >
          <img
            src={MyPhoto}
            alt="Madiha Jarrin"
            className="w-full h-full object-cover rounded-full"
          />
          <div 
          className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"
          ></div>
        </div>
      </motion.div>
      

    </section>

  )
}

export default Hero
