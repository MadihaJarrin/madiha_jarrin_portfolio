import React, { useState } from 'react'
import { motion } from "framer-motion"
import ResearchCard from './ResearchCard'
import { ResearchData } from './ResearchData'


const Research = () => {
      const [activePDF, setActivePDF] = useState(null)

  return (
    <section id="research" className="w-full bg-gray-900 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Academic Research
        </motion.h2>

        {/* Cards */}
        <div className="space-y-10">
          {ResearchData.map((paper) => (
            <ResearchCard
              key={paper.id}
              paper={paper}
              onRead={setActivePDF}
            />
          ))}
        </div>
      </div>
       {/* PDF Modal */}
      {activePDF && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActivePDF(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-gray-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePDF(null)}
              className="absolute top-3 right-4 text-red-500 text-3xl font-bold hover:text-purple-400"
            >
              ✕
            </button>
              <iframe
              src={activePDF}
              className="w-full h-full rounded-xl"
              title="Research PDF"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Research
