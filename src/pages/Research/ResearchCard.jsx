import { motion } from "framer-motion"

const ResearchCard = ({ paper, onRead }) => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-purple-400/30 bg-white/5 p-8"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-purple-400 font-semibold">
          {paper.status}
        </span>
        <span className="text-sm text-gray-400">{paper.year}</span>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-white">
        {paper.title}
      </h3>

      <p className="text-purple-400 mt-2 text-sm md:text-base">
        {paper.subtitle}
      </p>
<p className="mt-5 text-gray-300 text-sm md:text-base leading-relaxed">
        {paper.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {paper.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
{/* Actions */}
      <div className="mt-7 flex gap-4 flex-wrap">
        <button
          onClick={() => onRead(paper.pdf)}
          className="px-5 py-2 rounded-lg bg-purple-500/20 text-purple-300 font-semibold
          hover:bg-purple-500/30 transition"
        >
          📖 Read Paper
        </button>

        <a
          href={paper.pdf}
          download
          className="px-5 py-2 rounded-lg border border-purple-400/40 text-gray-200
          hover:bg-white/10 transition"
        >
          ⬇ Download
        </a>
      </div>
    </motion.div>
  )
}

export default ResearchCard
