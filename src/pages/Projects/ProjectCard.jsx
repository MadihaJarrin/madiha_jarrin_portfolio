import React, { useState } from 'react'
import { motion } from "framer-motion";


const ProjectCard = ({ project, index }) => {
      const [openImage, setOpenImage] = useState(false);

  return (
   <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-purple-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
{/* Project Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-snug">{project.description}</p>

        {/* Features / Bullet points */}
        {project.features && (
          <ul className="text-base list-disc list-inside text-gray-900 dark:text-gray-300 mb-3">
            {project.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {/* Tools / Technologies */}
        {project.tools && (
          <p className="text-sm text-gray-900 dark:text-gray-900 mb-3">
            <span className="font-bold">Tools:</span> {project.tools.join(", ")}
          </p>
        )}

        {/* Links */}
        <div className="flex gap-4 flex-wrap mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-700/20 text-black font-semibold rounded-md hover:bg-purple-700/40 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition duration-200"
            >
              GitHub
            </a>
          )}
          {project.github_server && (
            <a
              href={project.github_server}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-700/20 text-black font-semibold rounded-md hover:bg-purple-700/40 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition duration-200"
            >
              GitHub Server
            </a>
          )}
           {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-700/20 text-black font-semibold rounded-md hover:bg-purple-700/40 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition duration-200"
            >
              Live Site
            </a>
          )}
          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600/20 text-black font-semibold rounded-md hover:bg-green-600/40 hover:drop-shadow-[0_0_10px_rgba(0,255,128,0.6)] transition duration-200"
            >
              View Report
            </a>
          )}
          {project.image && (
            <button
              onClick={() => setOpenImage(true)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
            >
              View Image
            </button>
          )}
        </div>
      </motion.div>

 {/* Modal for Image */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setOpenImage(false)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  )
}

export default ProjectCard
