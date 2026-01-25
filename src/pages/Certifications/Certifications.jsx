import React from 'react'
import CertificationCard from '../../Components/CertificationCard/CertificationCard'
import webImg from '../../assets/certifications/web.jpg'
import plcImg from '../../assets/certifications/plc.jpg'
import xrImg from '../../assets/certifications/XR.png'
import spacImg from '../../assets/certifications/SPAC.jpg'

const certifications = [
  {
    title: "Complete Web Development",
    org: "Jhankar Mahbub - Programming Hero",
    img: webImg,
  },
 
  {
    title: "Programmable Logic Controller (PLC), VFD, HMI",
    org: "Ulterio",
    img: plcImg,
  },
  {
    title: "Extended Reality (XR)",
    org: "Battery Low Interactive Ltd.",
    img: xrImg,
  },
  {
    title: "Student Professional Awareness Conference 2025 (SPAC-25)",
    org: "IEEE NSU Student Branch",
    img: spacImg,
  },
   {
    title: "Cyber Diplomacy Online Training Course",
    org: "United Nation Office For Disarmament Affairs (UNODA)",
    img: "/assets/unoda.png",
  },
]

const Certifications = () => {
  return (
    <section id="achievements" className="w-full bg-gray-900 py-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          Achievements
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <CertificationCard
              key={idx}
              title={cert.title}
              org={cert.org}
              img={cert.img}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
