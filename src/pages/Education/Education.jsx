
import { motion } from "framer-motion"

const educationData = [
  {
    level: "BSC",
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    institute: "North South University",
    year: "June 2020 – April 2026",
    result: "CGPA: 3.03 out of 4.00",
  },
  {
    level: "HSC",
    degree: "Higher Secondary Certificate (Science)",
    institute: "Ideal School and College, Motijheel",
    year: "2019",
    result: "GPA: 4.83 out of 5.00",
  },
  {
    level: "SSC",
    degree: "Secondary School Certificate (Science)",
    institute: "Bright School and College",
    year: "2017",
    result: "GPA: 5.00 out of 5.00",
  },
]


const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}
const Education = () => {
  return (
    <section
      id="education"
      className="w-full bg-gray-800 py-20 scroll-mt-24"
      // className="w-full bg-gray-900 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          // className="text-3xl md:text-4xl font-bold text-center text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 5 }}
        >
          Education
        </motion.h2>


        {/* Horizontal Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 bg-gray-100 border border-gray-300 rounded-xl p-6 text-center md:text-left shadow-sm"
              // className="flex-1 bg-white/5 border border-purple-400/30 rounded-xl p-6 text-center md:text-left"
            >
              {/* Level */}
              <span 
              className="text-purple-600 font-semibold text-sm sm:text-base mb-2 inline-block"
              // className="text-purple-400 font-semibold text-sm sm:text-base mb-2 inline-block"
              >
                {edu.level}
              </span>

              {/* Degree */}
              <h3 
              className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug mt-1"
              // className="text-lg sm:text-xl font-semibold text-white leading-snug mt-1"
              >
                {edu.degree}
              </h3>
               {/* Institute */}
              <p 
              className="text-gray-600 mt-1"
              // className="text-gray-200 mt-1"
              >{edu.institute}</p>

              {/* Year & CGPA */}
              <div 
              className="mt-3 text-gray-700 text-sm sm:text-base space-y-1"
              // className="mt-3 text-gray-400 text-sm sm:text-base space-y-1"
              >
                <p>📅 {edu.year}</p>
                <p>🎓 {edu.result}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
       
    // <section
    //   id="education"
    //   className="w-full bg-gray-900 pt-0 sm:pt-24 pb-8 scroll-mt-24"
    // >
    //   <div className="max-w-6xl mx-auto px-6">

    //     {/* Title */}
    //     <motion.h2
    //       className="text-3xl md:text-4xl font-bold text-center text-white mb-16 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       Education
    //     </motion.h2>


    //     {/* Cards */}
    //     <div className="space-y-10">
    //       {educationData.map((edu, index) => (
    //         <motion.div
    //           key={index}
    //           variants={itemVariant}
    //           initial="hidden"
    //            whileInView="visible"
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           className="relative bg-white/5 border border-purple-400/30 rounded-xl p-6 sm:p-6"
    //         >
    //           <span className="absolute -top-3 left-4 sm:left-6 bg-gray-900 px-3 sm:px-4 text-sm sm:text-base text-purple-400 font-semibold">
    //           </span>

    //           <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
    //             {edu.degree}
    //           </h3>
    //           <p className="text-gray-200 mt-2">{edu.institute}</p>

    //           <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
    //             <span>📅 {edu.year}</span>
    //            <span>🎓 {edu.result}</span>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  )
}

export default Education

