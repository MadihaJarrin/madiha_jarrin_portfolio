import React from 'react'
import { motion } from "framer-motion"

const SkillCard = ({ title, items, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white/5 border border-purple-400/30 rounded-xl p-5 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="text-purple-400 font-bold mb-3">{title}</h4>
      <ul className="text-gray-200 flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="bg-gray-800/50 px-2 py-1 rounded-full text-base hover:bg-purple-500 hover:text-white transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SkillCard
