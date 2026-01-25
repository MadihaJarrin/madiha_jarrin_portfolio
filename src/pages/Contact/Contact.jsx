import React from 'react'
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

// Reusable Input component
const InputField = ({ type = "text", placeholder, rows = 1 }) => (
  rows === 1 ? (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
    />
  ) : (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
    />
  )
)

// Extendable contact info
const contactInfo = [
  { icon: <FaEnvelope />, text: "madihajarrin1@gmail.com" },
  { icon: <FaPhone />, text: "+880 163964...." },
  { icon: <FaMapMarkerAlt />, text: "Dhaka, Bangladesh" },
]
// Extendable social links
const socialLinks = [
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
  { icon: <FaGithub />, url: "hhttps://github.com/MadihaJarrin" },
]

const Contact = () => {
  return (
   <section
      id="contact"
      className="w-full bg-gray-900 py-20 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-white">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center
           mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]
           bg-gradient-to-r from-indigo-500 via-purple-500 p-1 rounded-tl-xl 
           "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reach Out to Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">

             {/* Left: Contact Info */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-purple-500 text-xl">{item.icon}</span>
                <span className="text-gray-200">{item.text}</span>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-4">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  className="text-gray-200 hover:text-purple-400 transition text-3xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            className="flex-1 flex flex-col gap-4 bg-white/5 p-6 rounded-xl border border-purple-400/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()} // placeholder
          >
            <InputField placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <InputField rows={5} placeholder="Your Message" />
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact
