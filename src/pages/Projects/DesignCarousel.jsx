import React from 'react'
import { motion } from "framer-motion";

const designs = [
  { id: 1, title: "Banner 1", image: "/designs/banner1.png" },
  { id: 2, title: "Poster 2", image: "/designs/poster2.png" },
  { id: 3, title: "Flyer 3", image: "/designs/flyer3.png" },
  { id: 4, title: "Instagram Post", image: "/designs/insta.png" },
];

const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((prev) => (prev === 0 ? designs.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === designs.length - 1 ? 0 : prev + 1));

const DesignCarousel = () => {
  return (
    <section className="w-full bg-gray-900 py-16" id="designs">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Designs
        </motion.h2>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-0 bg-purple-600/30 text-white p-2 md:p-3 rounded-full hover:bg-purple-600/50 transition z-10"
          >
            ◀
          </button>

          {/* Carousel Cards */}
          {designs.map((d, i) => (
            <motion.div
              key={d.id}
              className={`absolute w-72 sm:w-80 md:w-1/3 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500
                ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-75 z-0"}`}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 0.75 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-64 object-cover"
              />
              <div className="bg-gray-800 text-white p-3 text-center font-semibold">
                {d.title}
              </div>
            </motion.div>
          ))}

          {/* Right Arrow */}
          <button
            onClick={next}
               className="absolute right-2 md:right-0 bg-purple-600/30 text-white p-2 md:p-3 rounded-full hover:bg-purple-600/50 transition z-10"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}

export default DesignCarousel
