import { motion } from "framer-motion"
import { useState } from "react"
import Modal from "react-modal"

// Bind modal to root
Modal.setAppElement("#root")

const CertificationCard = ({ title, org, img, delay = 0 }) => {
      const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
     {/* Card */}
      <motion.div
        className="bg-white/5 border border-purple-400/30 rounded-xl overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.5)] cursor-pointer hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        onClick={() => setModalOpen(true)}
      >
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h4 className="text-purple-400 font-semibold mb-2">{title}</h4>
          <p className="text-gray-200 text-sm">{org}</p>
        </div>
      </motion.div>

     {/* Modal */}
       <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 z-50 outline-none"
        overlayClassName="fixed inset-0 bg-black/70 z-40 cursor-pointer"
      >
        {/* Container for modal content */}
        <div
          className="relative cursor-auto"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
        >
          {/* Close Button */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-2 text-red-500 text-4xl font-extrabold hover:text-red-400 z-50"
          >
            ×
          </button>
           {/* Image */}
          <motion.img
            src={img}
            alt={title}
            className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
        </div>
      </Modal>
    </>
  )
}

export default CertificationCard
